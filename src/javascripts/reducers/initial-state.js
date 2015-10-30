"use strict";

const initialState = {
  phase: "",
  dealer: "",
  action: "",
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
    north: {},
    south: {},
    east: {},
    west: {}
  }
};

module.exports = initialState;
