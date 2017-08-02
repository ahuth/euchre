import shuffle from "lodash/shuffle"
import take from "lodash/take"
import initialState from "./initial-state"
import {CARDS} from "../constants"

export default function Hands(state = initialState.hands, action) {
  switch (action.type) {
    case "START_GAME":
      const shuffled = shuffle(CARDS)
      return {south: take(shuffled, 5)}
    default:
      return state
  }
}
