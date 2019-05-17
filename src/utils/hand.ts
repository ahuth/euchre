import * as Card from './card';

interface Hand {
  cards: Array<Card.Type>,
}

export type Type = Hand;

/**
 * Create a new hand.
 */
export function create(): Hand {
  return {
    cards: [],
  };
}

/**
 * Add any number of cards to this hand.
 */
export function deal(hand: Hand, cards: Array<Card.Type>): Hand {
  return {
    ...hand,
    cards: hand.cards.concat(cards),
  };
}
