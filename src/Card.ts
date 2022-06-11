export enum Ranks { Four, Six, Nine, Ten, Jack, Queen, King, Ace };
export enum Suits { Spades, Hearts, Clubs, Diamonds };

export class Card {
  rank: Ranks;
  suit: Suits;

  constructor(rank: Ranks, suit: Suits) {
    this.rank = rank;
    this.suit = suit;
  }
}

export const cards = [
  new Card(Ranks.Ace, Suits.Spades),
  new Card(Ranks.Ace, Suits.Hearts),
  new Card(Ranks.Ace, Suits.Clubs),
  new Card(Ranks.Ace, Suits.Diamonds),
  new Card(Ranks.King, Suits.Spades),
  new Card(Ranks.King, Suits.Hearts),
  new Card(Ranks.King, Suits.Clubs),
  new Card(Ranks.King, Suits.Diamonds),
  new Card(Ranks.Queen, Suits.Spades),
  new Card(Ranks.Queen, Suits.Hearts),
  new Card(Ranks.Queen, Suits.Clubs),
  new Card(Ranks.Queen, Suits.Diamonds),
  new Card(Ranks.Jack, Suits.Spades),
  new Card(Ranks.Jack, Suits.Hearts),
  new Card(Ranks.Jack, Suits.Clubs),
  new Card(Ranks.Jack, Suits.Diamonds),
  new Card(Ranks.Ten, Suits.Spades),
  new Card(Ranks.Ten, Suits.Hearts),
  new Card(Ranks.Ten, Suits.Clubs),
  new Card(Ranks.Ten, Suits.Diamonds),
  new Card(Ranks.Nine, Suits.Spades),
  new Card(Ranks.Nine, Suits.Hearts),
  new Card(Ranks.Nine, Suits.Clubs),
  new Card(Ranks.Nine, Suits.Diamonds),
];
