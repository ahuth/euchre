"use strict";

import PlayingCard from "./playing-card";

export const nine = {
  spades: new PlayingCard({face: "nine", suit: "spades"}),
  clubs: new PlayingCard({face: "nine", suit: "clubs"}),
  hearts: new PlayingCard({face: "nine", suit: "hearts"}),
  diamonds: new PlayingCard({face: "nine", suit: "diamonds"})
};

export const ten = {
  spades: new PlayingCard({face: "ten", suit: "spades"}),
  clubs: new PlayingCard({face: "ten", suit: "clubs"}),
  hearts: new PlayingCard({face: "ten", suit: "hearts"}),
  diamonds: new PlayingCard({face: "ten", suit: "diamonds"})
};

export const jack = {
  spades: new PlayingCard({face: "jack", suit: "spades"}),
  clubs: new PlayingCard({face: "jack", suit: "clubs"}),
  hearts: new PlayingCard({face: "jack", suit: "hearts"}),
  diamonds: new PlayingCard({face: "jack", suit: "diamonds"})
};

export const queen = {
  spades: new PlayingCard({face: "queen", suit: "spades"}),
  clubs: new PlayingCard({face: "queen", suit: "clubs"}),
  hearts: new PlayingCard({face: "queen", suit: "hearts"}),
  diamonds: new PlayingCard({face: "queen", suit: "diamonds"})
}

export const king = {
  spades: new PlayingCard({face: "king", suit: "spades"}),
  clubs: new PlayingCard({face: "king", suit: "clubs"}),
  hearts: new PlayingCard({face: "king", suit: "hearts"}),
  diamonds: new PlayingCard({face: "king", suit: "diamonds"})
};

export const ace = {
  spades: new PlayingCard({face: "ace", suit: "spades"}),
  clubs: new PlayingCard({face: "ace", suit: "clubs"}),
  hearts: new PlayingCard({face: "ace", suit: "hearts"}),
  diamonds: new PlayingCard({face: "ace", suit: "diamonds"})
};

export default {nine, ten, jack, queen, king, ace};
