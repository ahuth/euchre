import * as Deck from './deck';
import * as Hands from './hands';

export enum Phase { callingTrump, trickTaking }

interface Round {
  alone: boolean,
  called?: Hands.Position,
  current: Hands.Position,
  dealer: Hands.Position,
  deck: Deck.Type,
  hands: Hands.Type,
  phase: Phase,
}

export type Type = Round;

/**
 * Start a new round.
 */
export function create(dealer: Hands.Position): Round {
  return {
    alone: false,
    current: Hands.nextPosition(dealer),
    dealer: dealer,
    deck: Deck.create(),
    hands: Hands.create(),
    phase: Phase.callingTrump,
  };
}
