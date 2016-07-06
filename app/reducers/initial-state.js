"use strict";

import {phases, positions} from "../constants";

const initialState = {
  current: positions.WEST,
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
