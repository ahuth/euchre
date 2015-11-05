"use strict";

const initialState = {
  phase: "",
  dealer: "",
  action: "",
  upCard: {face: undefined, suit: undefined},
  scores: {
    north: 0,
    west: 0
  },
  trump: {
    suit: "",
    calledBy: ""
  },
  hands: {
    north: [],
    south: [],
    east: [],
    west: []
  },
  played: {
    north: {face: undefined, suit: undefined},
    south: {face: undefined, suit: undefined},
    east: {face: undefined, suit: undefined},
    west: {face: undefined, suit: undefined}
  }
};

module.exports = initialState;
