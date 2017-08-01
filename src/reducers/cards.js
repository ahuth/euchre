import initialState from "./initial-state"

export default function Cards(state = initialState.cards, action) {
  switch (action.type) {
    case "START_GAME":
      return [
        {rank: "A", suit: "hearts"},
        {rank: "K", suit: "clubs"},
        {rank: "Q", suit: "spades"},
        {rank: "J", suit: "diamonds"},
      ]
    default:
      return state
  }
}
