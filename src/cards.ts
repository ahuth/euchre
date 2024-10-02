import shuffle from 'lodash/shuffle';

export type Rank = 9 | 10 | 'J' | 'Q' | 'K' | 'A';
export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
export type Card = {rank: Rank; suit: Suit};

const cards: Card[] = [
  {rank: 9, suit: 'hearts'},
  {rank: 10, suit: 'hearts'},
  {rank: 'J', suit: 'hearts'},
  {rank: 'Q', suit: 'hearts'},
  {rank: 'K', suit: 'hearts'},
  {rank: 'A', suit: 'hearts'},
  {rank: 9, suit: 'diamonds'},
  {rank: 10, suit: 'diamonds'},
  {rank: 'J', suit: 'diamonds'},
  {rank: 'Q', suit: 'diamonds'},
  {rank: 'K', suit: 'diamonds'},
  {rank: 'A', suit: 'diamonds'},
  {rank: 9, suit: 'clubs'},
  {rank: 10, suit: 'clubs'},
  {rank: 'J', suit: 'clubs'},
  {rank: 'Q', suit: 'clubs'},
  {rank: 'K', suit: 'clubs'},
  {rank: 'A', suit: 'clubs'},
  {rank: 9, suit: 'spades'},
  {rank: 10, suit: 'spades'},
  {rank: 'J', suit: 'spades'},
  {rank: 'Q', suit: 'spades'},
  {rank: 'K', suit: 'spades'},
  {rank: 'A', suit: 'spades'},
];

export function shuffleDeck() {
  return shuffle(cards);
}
