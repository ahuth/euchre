"use strict";

import {phases} from "../constants";

const initialState = {
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
