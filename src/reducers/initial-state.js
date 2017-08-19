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
  trump: {
    calledBy: undefined,
    suit: undefined,
  }
}

export default initialState
