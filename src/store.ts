import {create} from 'zustand';
import {dealHand, type Card} from './cards';

type State = {
  hand: Card[];
};

export const useStore = create<State>(() => {
  return {
    hand: dealHand(),
  };
});
