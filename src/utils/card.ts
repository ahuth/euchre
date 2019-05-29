export type Rank = '4' | '6' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
export type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades';

interface Card {
  rank: Rank,
  suit: Suit,
}

export type Type = Card;

/**
 * Create a new card.
 */
export function create(rank: Rank, suit: Suit): Card {
  return { rank, suit };
}

/**
 * Determine if two cards are the same or not.
 */
export function equal(a: Card, b: Card): boolean {
  return a.rank === b.rank && a.suit === b.suit;
}
