import {createStore} from '@xstate/store';
import {shuffleDeck, type Card, type Suit} from './cards';

export {useSelector} from '@xstate/store/react';

export const store = createStore({
  context: {
    phase: 'idle' as 'idle' | 'ordering' | 'discarding' | 'picking',
    hand1: [] as Card[],
    hand2: [] as Card[],
    hand3: [] as Card[],
    hand4: [] as Card[],
    kitty: [] as Card[],
    dealer: 0,
    current: 0,
    orderedBy: 0,
    trump: null as Suit | null,
  },
  on: {
    deal: (context) => {
      const deck = shuffleDeck();
      const nextDealer = (context.dealer + 1) % 4;
      const dealersLeft = (nextDealer + 1) % 4;
      return {
        phase: 'ordering' as const,
        hand1: deck.slice(0, 5),
        hand2: deck.slice(5, 10),
        hand3: deck.slice(10, 15),
        hand4: deck.slice(15, 20),
        kitty: deck.slice(20),
        dealer: (context.dealer + 1) % 4,
        current: dealersLeft,
      };
    },
    orderUp: (context) => {
      const topCard = context.kitty[0];
      const dealerHandKey =
        context.dealer === 0 ? 'hand1'
        : context.dealer === 1 ? 'hand2'
        : context.dealer === 2 ? 'hand3'
        : 'hand4';

      return {
        phase: 'discarding' as const,
        orderedBy: context.current,
        trump: topCard.suit,
        kitty: context.kitty.slice(1),
        [dealerHandKey]: context[dealerHandKey].concat(topCard),
      };
    },
    passOrderUp: (context) => {
      if (context.current === context.dealer) {
        return {
          phase: 'picking' as const,
          current: (context.dealer + 1) % 4,
        };
      }
      return {
        current: (context.current + 1) % 4,
      };
    },
  },
});

store.inspect((inspectionEvent) => {
  console.log(inspectionEvent);
});
