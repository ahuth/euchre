import {cards} from './Card';
import {type Action, initialState, reducer} from './reducer';

describe('deal', () => {
  const action: Action = {
    type: 'deal',
    cards: {
      1: [],
      2: [],
      3: [],
      4: [],
      kitty: [],
    },
  };

  it('moves to ordering', () => {
    const nextState = reducer(initialState, action);
    expect(nextState.phase).toEqual('ordering');
  });

  it("sets the current position to the dealer's left", () => {
    const state = {...initialState, dealer: 2 as const};
    const nextState = reducer(state, action);
    expect(nextState.current).toEqual(3);
  });
});

describe('ordering_pass', () => {
  const action: Action = {
    type: 'ordering_pass',
  };

  describe('when the current position is the dealer', () => {
    const state = {
      ...initialState,
      phase: 'ordering',
      current: 3,
      dealer: 3,
    } as const;

    it('moves to picking', () => {
      const nextState = reducer(state, action);
      expect(nextState.phase).toEqual('picking');
    });

    it("sets the current position to the dealer's left", () => {
      const nextState = reducer(state, action);
      expect(nextState.current).toEqual(4);
    });
  });

  describe('when the current position is NOT the dealer', () => {
    const state = {
      ...initialState,
      phase: 'ordering',
      current: 1,
      dealer: 3,
    } as const;

    it('stays at ordering', () => {
      const nextState = reducer(state, action);
      expect(nextState.phase).toEqual('ordering');
    });

    it('advances the current position to the left', () => {
      const nextState = reducer(state, action);
      expect(nextState.current).toEqual(2);
    });
  });
});

describe('ordering_pick', () => {
  const action: Action = {
    type: 'ordering_pick',
  };

  const state = {
    ...initialState,
    dealer: 1 as const,
    current: 3 as const,
    pickedBy: 1 as const,
    cards: {
      ...initialState.cards,
      kitty: [cards.ace_hearts],
    },
  };

  it('moves to playing', () => {
    const nextState = reducer(state, action);
    expect(nextState.phase).toEqual('playing');
  });

  it("sets the current position to the dealer's left", () => {
    const nextState = reducer(state, action);
    expect(nextState.current).toEqual(2);
  });

  it('captures who ordered it up', () => {
    const nextState = reducer(state, action);
    expect(nextState.pickedBy).toEqual(3);
  });

  it('captures trump from the top card in the kitty', () => {
    const nextState = reducer(state, action);
    expect(nextState.trump).toEqual(cards.ace_hearts.suit);
  });
});

describe('picking_pass', () => {
  const action: Action = {
    type: 'picking_pass',
  };

  describe('when the current position is the dealer', () => {
    const state = {
      ...initialState,
      phase: 'picking',
      current: 3,
      dealer: 3,
    } as const;

    it('moves to misdeal', () => {
      const nextState = reducer(state, action);
      expect(nextState.phase).toEqual('misdeal');
    });
  });

  describe('when the current position is NOT the dealer', () => {
    const state = {
      ...initialState,
      phase: 'picking',
      current: 1,
      dealer: 3,
    } as const;

    it('stays at picking', () => {
      const nextState = reducer(state, action);
      expect(nextState.phase).toEqual('picking');
    });

    it('advances the current position to the left', () => {
      const nextState = reducer(state, action);
      expect(nextState.current).toEqual(2);
    });
  });
});

describe('picking_pick', () => {
  const action: Action = {
    type: 'picking_pick',
    suit: cards.ace_clubs.suit,
  };

  const state = {
    ...initialState,
    dealer: 1 as const,
    current: 3 as const,
    pickedBy: 1 as const,
  };

  it('moves to playing', () => {
    const nextState = reducer(state, action);
    expect(nextState.phase).toEqual('playing');
  });

  it("sets the current position to the dealer's left", () => {
    const nextState = reducer(state, action);
    expect(nextState.current).toEqual(2);
  });

  it('captures who ordered it up', () => {
    const nextState = reducer(state, action);
    expect(nextState.pickedBy).toEqual(3);
  });

  it('captures the trump suit', () => {
    const nextState = reducer(state, action);
    expect(nextState.trump).toEqual(cards.ace_clubs.suit);
  });
});
