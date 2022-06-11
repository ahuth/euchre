import {cards} from './Card';
import {type Action, initialState, reducer} from './reducer';

describe('deals', () => {
  it('moves to ordering', () => {
    const action: Action = {
      type: 'deal',
      cards: {
        1: cards.slice(0, 5),
        2: cards.slice(5, 10),
        3: cards.slice(10, 15),
        4: cards.slice(15, 20),
        kitty: cards.slice(20),
      },
    };

    const nextState = reducer(initialState, action);

    expect(nextState).toMatchObject({
      phase: 'ordering',
    });
  });
});
