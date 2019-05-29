import * as Game from './utils/game';
import { Type as Card, Suit } from './utils/card';

export type Action =
  | CallTrump
  | CallTrumpAlone
  | Discard
  | Pass
  | PickItUp
  | PickItUpAlone
  | PlayCard
  | StartAction
;

type CallTrump = { type: 'call_trump', suit: Suit }
type CallTrumpAlone = { type: 'call_trump_alone', suit: Suit }
type Discard = { type: 'discard', card: Card }
type Pass = { type: 'pass' }
type PickItUp = { type: 'pick_it_up' }
type PickItUpAlone = { type: 'pick_it_up_alone' }
type PlayCard = { type: 'play_card', card: Card }
type StartAction = { type: 'start' }

export default function reducer(state: Game.Type, action: Action) {
  switch (action.type) {
    case 'start':
      return Game.start(state);
    default:
      return state;
  }
}
