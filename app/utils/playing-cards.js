"use strict";

import PlayingCard from "./playing-card";

const playingCards = {
  nine: {
    spades: new PlayingCard({face: "nine", suit: "spades"}),
    clubs: new PlayingCard({face: "nine", suit: "clubs"}),
    hearts: new PlayingCard({face: "nine", suit: "hearts"}),
    diamonds: new PlayingCard({face: "nine", suit: "diamonds"})
  },
  ten: {
    spades: new PlayingCard({face: "ten", suit: "spades"}),
    clubs: new PlayingCard({face: "ten", suit: "clubs"}),
    hearts: new PlayingCard({face: "ten", suit: "hearts"}),
    diamonds: new PlayingCard({face: "ten", suit: "diamonds"})
  },
  jack: {
    spades: new PlayingCard({face: "jack", suit: "spades"}),
    clubs: new PlayingCard({face: "jack", suit: "clubs"}),
    hearts: new PlayingCard({face: "jack", suit: "hearts"}),
    diamonds: new PlayingCard({face: "jack", suit: "diamonds"})
  },
  queen: {
    spades: new PlayingCard({face: "queen", suit: "spades"}),
    clubs: new PlayingCard({face: "queen", suit: "clubs"}),
    hearts: new PlayingCard({face: "queen", suit: "hearts"}),
    diamonds: new PlayingCard({face: "queen", suit: "diamonds"})
  },
  king: {
    spades: new PlayingCard({face: "king", suit: "spades"}),
    clubs: new PlayingCard({face: "king", suit: "clubs"}),
    hearts: new PlayingCard({face: "king", suit: "hearts"}),
    diamonds: new PlayingCard({face: "king", suit: "diamonds"})
  },
  ace: {
    spades: new PlayingCard({face: "ace", suit: "spades"}),
    clubs: new PlayingCard({face: "ace", suit: "clubs"}),
    hearts: new PlayingCard({face: "ace", suit: "hearts"}),
    diamonds: new PlayingCard({face: "ace", suit: "diamonds"})
  }
}

export default playingCards;
