import * as Deck from './deck';
import * as Hand from './hand';

export enum Phase { callingTrump, trickTaking }
export enum Position { N, E, S, W }

interface Hands {
  [Position.N]: Hand.Type;
  [Position.E]: Hand.Type;
  [Position.S]: Hand.Type;
  [Position.W]: Hand.Type;
}

interface Round {
  alone: boolean,
  called?: Position,
  current: Position,
  deck: Deck.Type,
  hands: Hands,
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
    hands: {
      [Position.N]: Hand.create(),
      [Position.E]: Hand.create(),
      [Position.S]: Hand.create(),
      [Position.W]: Hand.create(),
    },
    phase: Phase.callingTrump,
  };
}
