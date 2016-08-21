import {phases, positions} from "../constants";

const initialState = {
  hands: {
    north: [],
    south: [],
    east: [],
    west: [],
    kitty: []
  },
  phase: phases.ORDER_UP,
  positions: {
    current: positions.WEST,
    dealer: positions.SOUTH,
    initial: positions.WEST
  },
  trump: {
    caller: "",
    suit: ""
  }
};

export default initialState;