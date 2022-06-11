import { Card, Suits } from './Card';

/**
 * Player positions.
 *
 *     3
 *   2   4
 *     1
 */
type Position = 1 | 2 | 3 | 4;

type Phase =
  | 'idle'
  | 'ordering'
  | 'picking'
  | 'playing'
  | 'hand_won_A'
  | 'hand_won_B'
  | 'game_won_A'
  | 'game_won_B'
  | 'misdeal';

export type State = {
  phase: Phase;
  dealer: Position;
  current: Position;
  pickedBy: Position;
  trump: Suits;
  cards: {
    1: Card[];
    2: Card[];
    3: Card[];
    4: Card[];
    kitty: Card[];
  };
  scores: {
    A: number;
    B: number;
  };
};

export type Action =
  | {
    type: 'deal';
    cards: {
      1: Card[];
      2: Card[];
      3: Card[];
      4: Card[];
      kitty: Card[];
    };
  }
  | { type: 'ordering_pass' }
  | { type: 'ordering_pick' }
  | { type: 'picking_pass' }
  | { type: 'picking_pick'; suit: Suits }
  | { type: 'play_card'; card: Card };

export const initialState: State = {
  phase: 'idle',
  dealer: 1,
  current: 1,
  pickedBy: 1,
  trump: Suits.Hearts,
  cards: {
    1: [],
    2: [],
    3: [],
    4: [],
    kitty: [],
  },
  scores: {
    A: 0,
    B: 0,
  },
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'deal':
      return {
        ...state,
        phase: 'ordering',
        current: advancePosition(state.dealer),
        cards: action.cards,
      };
    case 'ordering_pass': {
      if (state.current === state.dealer) {
        return {
          ...state,
          phase: 'picking',
          current: advancePosition(state.dealer),
        };
      }
      return {
        ...state,
        current: advancePosition(state.current),
      };
    }
    case 'ordering_pick':
      return {
        ...state,
        phase: 'playing',
        current: advancePosition(state.dealer),
        pickedBy: state.current,
        trump: state.cards.kitty[0].suit,
      };
    case 'picking_pass': {
      if (state.current === state.dealer) {
        return {
          ...state,
          phase: 'misdeal',
        };
      }
      return {
        ...state,
        current: advancePosition(state.current),
      };
    }
    case 'picking_pick':
      return {
        ...state,
        phase: 'playing',
        current: advancePosition(state.dealer),
        pickedBy: state.current,
        trump: action.suit,
      };
    case 'play_card': {
      // TODO
      return state;
    }
    default:
      return state;
  }
}

function advancePosition(position: Position): Position {
  switch (position) {
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 4;
    case 4:
      return 1;
  }
}
