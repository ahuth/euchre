import initialState from "./initial-state"

export default function Phase(state = initialState.phase, action) {
  switch (action.type) {
    case "DEAL_HANDS":
      return "order up"
    default:
      return state
  }
}
