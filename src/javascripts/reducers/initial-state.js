"use strict";

const initialState = {
  phase: "",
  dealer: "",
  action: "",
  upCard: undefined,
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
    north: undefined,
    south: undefined,
    east: undefined,
    west: undefined
  }
};

module.exports = initialState;
