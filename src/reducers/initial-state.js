const initialState = {
  hands: {
    north: [],
    south: [],
    east: [],
    west: [],
    kitty: [],
  },
  phase: "order up",
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
