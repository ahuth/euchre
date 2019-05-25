import * as Game from './utils/game';

export type Action = StartAction;
type StartAction = { type: 'start' };

export default function reducer(state: Game.Type, action: Action) {
  switch (action.type) {
    case 'start':
      return Game.start(state);
    default:
      return state;
  }
}
