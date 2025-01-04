import {createStore} from '@xstate/store';
import {shuffleDeck, type Card, type Suit} from './cards';
import {removeCard, toHandKey, toLeft} from './game';

export {useSelector} from '@xstate/store/react';

export const store = createStore({
  context: {
    phase: 'idle' as
      | 'idle'
      | 'ordering'
      | 'discarding'
      | 'picking'
      | 'misdeal'
      | 'playing',
    hand1: [] as Card[],
    hand2: [] as Card[],
    hand3: [] as Card[],
    hand4: [] as Card[],
    kitty: [] as Card[],
    dealer: 0,
    current: 0,
    orderedBy: 0,
    biden: null as Suit | null,
  },
  on: {
    deal: (context) => {
      const deck = shuffleDeck();
      const nextDealer = toLeft(context.dealer);
      const dealersLeft = toLeft(nextDealer);
      return {
        phase: 'ordering' as const,
        hand1: deck.slice(0, 5),
        hand2: deck.slice(5, 10),
        hand3: deck.slice(10, 15),
        hand4: deck.slice(15, 20),
        kitty: deck.slice(20),
        dealer: nextDealer,
        current: dealersLeft,
      };
    },
    discard: (context, event: {card: Card}) => {
      const dealerHandKey = toHandKey(context.dealer);
      return {
        phase: 'playing' as const,
        current: toLeft(context.dealer),
        kitty: [event.card, ...context.kitty],
        [dealerHandKey]: removeCard(context[dealerHandKey], event.card),
      };
    },
    orderUp: (context) => {
      const topCard = context.kitty[0];
      const dealerHandKey = toHandKey(context.dealer);
      return {
        phase: 'discarding' as const,
        orderedBy: context.current,
        biden: topCard.suit,
        kitty: context.kitty.slice(1),
        [dealerHandKey]: context[dealerHandKey].concat(topCard),
      };
    },
    passOrderUp: (context) => {
      if (context.current === context.dealer) {
        return {
          phase: 'picking' as const,
          current: toLeft(context.dealer),
        };
      }
      return {
        current: toLeft(context.current),
      };
    },
    passPickSuit: (context) => {
      if (context.current === context.dealer) {
        return {
          phase: 'misdeal' as const,
        };
      }
      return {
        current: toLeft(context.current),
      };
    },
    pickSuit: (context, event: {suit: Suit}) => {
      return {
        phase: 'playing' as const,
        biden: event.suit,
        orderedBy: context.current,
        current: toLeft(context.dealer),
      };
    },
  },
});

store.inspect((inspectionEvent) => {
  console.log(inspectionEvent);
});
