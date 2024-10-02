import {create} from 'zustand';
import {shuffleDeck, type Card, type Suit} from './cards';

type State = {
  phase: 'idle' | 'picking';
  hand1: Card[];
  hand2: Card[];
  hand3: Card[];
  hand4: Card[];
  kitty: Card[];
  dealer: number;
  trump: Suit | null;
  actions: {
    deal: () => void;
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
    trump: null,
    actions: {
      deal: () => {
        set((state) => {
          if (state.phase !== 'idle') {
            return {};
          }
          const deck = shuffleDeck();
          return {
            phase: 'picking',
            hand1: deck.slice(0, 5),
            hand2: deck.slice(5, 10),
            hand3: deck.slice(10, 15),
            hand4: deck.slice(15, 20),
            kitty: deck.slice(20),
            dealer: (state.dealer + 1) % 4,
          };
        });
      },
    },
  };
});
