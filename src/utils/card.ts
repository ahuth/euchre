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
