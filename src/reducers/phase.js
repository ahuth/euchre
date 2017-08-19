import initialState from "./initial-state"
import {Phase as PhaseType} from "../types"

export default function Phase(state = initialState.phase, action) {
  switch (action.type) {
    case "DEAL_HANDS":
      return PhaseType.orderUp
    default:
      return state
  }
}
