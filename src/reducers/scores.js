import initialState from "./initial-state"

export default function Scores(state = initialState.scores, action) {
  switch (action.type) {
    case "DEAL_HANDS":
      return {north: 0, west: 0}
    default:
      return state
  }
}
