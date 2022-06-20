export enum Ranks { Four, Six, Nine, Ten, Jack, Queen, King, Ace };
export enum Suits { Spades, Hearts, Clubs, Diamonds };

export class Card {
  rank: Ranks;
  suit: Suits;

  constructor(rank: Ranks, suit: Suits) {
    this.rank = rank;
    this.suit = suit;
  }

  displayColor() {
    return colors[this.suit];
  }

  displayRank() {
    return rankSymbols[this.rank];
  }

  displaySuit() {
    return suitSymbols[this.suit];
  }
}

const colors = {
  [Suits.Spades]: 'text-black',
  [Suits.Hearts]: 'text-red-600',
  [Suits.Clubs]: 'text-black',
  [Suits.Diamonds]: 'text-red-600',
};

const suitSymbols = {
  [Suits.Spades]: '♠',
  [Suits.Hearts]: '♥',
  [Suits.Clubs]: '♣',
  [Suits.Diamonds]: '♦',
};

const rankSymbols = {
  [Ranks.Four]: '4',
  [Ranks.Six]: '6',
  [Ranks.Nine]: '9',
  [Ranks.Ten]: '10',
  [Ranks.Jack]: 'J',
  [Ranks.Queen]: 'Q',
  [Ranks.King]: 'K',
  [Ranks.Ace]: 'A',
};

export const cards = {
  ace_spades: new Card(Ranks.Ace, Suits.Spades),
  ace_hearts: new Card(Ranks.Ace, Suits.Hearts),
  ace_clubs: new Card(Ranks.Ace, Suits.Clubs),
  ace_diamonds: new Card(Ranks.Ace, Suits.Diamonds),
  king_spades: new Card(Ranks.King, Suits.Spades),
  king_hearsts: new Card(Ranks.King, Suits.Hearts),
  king_clubs: new Card(Ranks.King, Suits.Clubs),
  king_diamonds: new Card(Ranks.King, Suits.Diamonds),
  queen_spades: new Card(Ranks.Queen, Suits.Spades),
  queen_hearts: new Card(Ranks.Queen, Suits.Hearts),
  queen_clubs: new Card(Ranks.Queen, Suits.Clubs),
  queen_diamonds: new Card(Ranks.Queen, Suits.Diamonds),
  jack_spades: new Card(Ranks.Jack, Suits.Spades),
  jack_hearts: new Card(Ranks.Jack, Suits.Hearts),
  jack_clubs: new Card(Ranks.Jack, Suits.Clubs),
  jack_diamonds: new Card(Ranks.Jack, Suits.Diamonds),
  ten_spades: new Card(Ranks.Ten, Suits.Spades),
  ten_hearts: new Card(Ranks.Ten, Suits.Hearts),
  ten_clubs: new Card(Ranks.Ten, Suits.Clubs),
  ten_diamonds: new Card(Ranks.Ten, Suits.Diamonds),
  nine_spades: new Card(Ranks.Nine, Suits.Spades),
  nine_hearts: new Card(Ranks.Nine, Suits.Hearts),
  nine_clubs: new Card(Ranks.Nine, Suits.Clubs),
  nine_diamonds: new Card(Ranks.Nine, Suits.Diamonds),
};
