import * as Deck from './deck';
import * as Hands from './hands';

export enum Phase { callingTrump, trickTaking }

interface Round {
  alone: boolean,
  called?: Hands.Position,
  current: Hands.Position,
  deck: Deck.Type,
  hands: Hands.Type,
  phase: Phase,
}

export type Type = Round;

/**
 * Start a new round.
 */
export function create(first: Position): Round {
  return {
    alone: false,
    current: first,
    deck: Deck.create(),
    hands: Hands.create(),
    phase: Phase.callingTrump,
  };
}
