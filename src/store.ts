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
    trump: null as Suit | null,
  },
  on: {
    deal: (context) => {
      if (context.phase !== 'idle') {
        return {};
      }
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
      if (context.phase !== 'ordering') {
        return {};
      }
      return {
        phase: 'discarding' as const,
        trump: context.kitty[0].suit,
        current: (context.dealer + 1) % 4,
      };
    },
    passOrderUp: (context) => {
      if (context.phase !== 'ordering') {
        return {};
      }
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
