export enum Ranks { Four, Six, Nine, Ten, Jack, Queen, King, Ace };
export enum Suits { Spades, Hearts, Clubs, Diamonds };

export default class Card {
  rank: Ranks;
  suit: Suits;

  constructor(rank: Ranks, suit: Suits) {
    this.rank = rank;
    this.suit = suit;
  }
}
