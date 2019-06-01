import * as Card from './card';

type Hand = Array<Card.Type>;

export type Type = Hand;

/**
 * Create a new hand.
 */
export function create(): Hand {
  return [];
}

/**
 * Add any number of cards to this hand.
 */
export function deal(hand: Hand, cards: Array<Card.Type>): Hand {
  return hand.concat(cards);
}

/**
 * Remove a card from the hand.
 */
export function remove(hand: Hand, card: Card.Type): Hand {
  return hand.filter(c => !Card.equal(c, card));
}
