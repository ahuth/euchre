import * as Card from './card';
import * as Hand from './hand';

export enum Position { N, E, S, W };

interface Hands {
  [Position.N]: Hand.Type;
  [Position.E]: Hand.Type;
  [Position.S]: Hand.Type;
  [Position.W]: Hand.Type;
};

export type Type = Hands;

/**
 * Create a new set of (empty) hands.
 */
export function create(): Hands {
  return {
    [Position.N]: Hand.create(),
    [Position.E]: Hand.create(),
    [Position.S]: Hand.create(),
    [Position.W]: Hand.create(),
  };
}

/**
 * Deal cards to the hand at a position.
 */
export function dealTo(hands: Hands, position: Position, cards: Array<Card.Type>): Hands {
  return {
    ...hands,
    [position]: Hand.deal(hands[position], cards),
  };
}

/**
 * Remove a card from the specified hand.
 */
export function removeFrom(hands: Hands, position: Position, card: Card.Type): Hands {
  return {
    ...hands,
    [position]: Hand.remove(hands[position], card),
  };
}

/**
 * Get the next position, to the left of one passed in.
 */
export function nextPosition(position: Position): Position {
  return (position + 1) % 4;
}
