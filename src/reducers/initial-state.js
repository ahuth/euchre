import {Phase} from "../types"

const initialState = {
  hands: {
    north: [],
    south: [],
    east: [],
    west: [],
    kitty: [],
  },
  phase: Phase.orderUp,
  positions: {
    dealer: "east",
    turn: "south",
  },
  scores: {
    north: 0,
    west: 0,
  },
  trump: {
    calledBy: undefined,
    suit: undefined,
  },
}

export default initialState
