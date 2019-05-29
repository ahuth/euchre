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

/**
 * Remove a card from the hand.
 */
export function remove(hand: Hand, card: Card.Type): Hand {
  return {
    ...hand,
    cards: hand.cards.filter(c => !Card.equal(c, card)),
  };
}
