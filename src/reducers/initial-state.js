const initialState = {
  hands: {
    north: [],
    south: [],
    east: [],
    west: [],
    kitty: [],
  },
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
