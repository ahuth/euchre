import shuffle from "lodash/shuffle"
import take from "lodash/take"
import without from "lodash/without"
import initialState from "./initial-state"
import {CARDS} from "../constants"

export default function Hands(state = initialState.hands, action) {
  switch (action.type) {
    case "DEAL_HANDS":
      const shuffled = shuffle(CARDS)
      return {south: take(shuffled, 5)}
    case "PLAY_CARD":
      return {
        ...state,
        south: without(state.south, action.payload.card)
      }
    default:
      return state
  }
}
