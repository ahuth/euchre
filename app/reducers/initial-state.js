"use strict";

import {phases, positions} from "../constants";

const initialState = {
  dealer: positions.SOUTH,
  hands: {
    north: [],
    south: [],
    east: [],
    west: [],
    kitty: []
  },
  phase: phases.ORDER_UP
};

export default initialState;
