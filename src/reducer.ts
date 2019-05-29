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
  | Start
;

type CallTrump = { type: 'call_trump', suit: Suit }
type CallTrumpAlone = { type: 'call_trump_alone', suit: Suit }
type Discard = { type: 'discard', card: Card }
type Pass = { type: 'pass' }
type PickItUp = { type: 'pick_it_up' }
type PickItUpAlone = { type: 'pick_it_up_alone' }
type PlayCard = { type: 'play_card', card: Card }
type Start = { type: 'start' }

export default function reducer(state: Game.Type, action: Action) {
  switch (action.type) {
    case 'call_trump':
      return Game.callTrump(state, action.suit, false);
    case 'call_trump_alone':
      return Game.callTrump(state, action.suit, true);
    case 'discard':
      return Game.discard(state, action.card);
    case 'pass':
      return Game.pass(state);
    case 'pick_it_up':
      return Game.pickItUp(state, false);
    case 'pick_it_up_alone':
      return Game.pickItUp(state, true);
    case 'play_card':
      return Game.playCard(state, action.card);
    case 'start':
      return Game.start(state);
    default:
      return state;
  }
}
