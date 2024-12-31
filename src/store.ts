import {create} from 'zustand';
import {shuffleDeck, type Card, type Suit} from './cards';

type State = {
  phase: 'idle' | 'ordering' | 'discarding' | 'picking';
  hand1: Card[];
  hand2: Card[];
  hand3: Card[];
  hand4: Card[];
  kitty: Card[];
  dealer: number;
  current: number;
  trump: Suit | null;
  actions: {
    deal: () => void;
    orderUp: () => void;
    passOrderUp: () => void;
  };
};

export const useStore = create<State>((set) => {
  return {
    phase: 'idle',
    hand1: [],
    hand2: [],
    hand3: [],
    hand4: [],
    kitty: [],
    dealer: 0,
    current: 0,
    trump: null,
    actions: {
      deal: () => {
        set((state) => {
          if (state.phase !== 'idle') {
            return {};
          }
          const deck = shuffleDeck();
          const nextDealer = (state.dealer + 1) % 4;
          const dealersLeft = (nextDealer + 1) % 4;
          return {
            phase: 'ordering',
            hand1: deck.slice(0, 5),
            hand2: deck.slice(5, 10),
            hand3: deck.slice(10, 15),
            hand4: deck.slice(15, 20),
            kitty: deck.slice(20),
            dealer: (state.dealer + 1) % 4,
            current: dealersLeft,
          };
        });
      },
      orderUp: () => {
        set((state) => {
          if (state.phase !== 'ordering') {
            return {};
          }
          return {
            phase: 'discarding',
            trump: state.kitty[0].suit,
            current: (state.dealer + 1) % 4,
          };
        });
      },
      passOrderUp: () => {
        set((state) => {
          if (state.phase !== 'ordering') {
            return {};
          }
          if (state.current === state.dealer) {
            return {
              phase: 'picking',
              current: (state.dealer + 1) % 4,
            };
          }
          return {
            current: (state.current + 1) % 4,
          };
        });
      },
    },
  };
});
