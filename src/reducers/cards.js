import take from "lodash/take"
import shuffle from "lodash/shuffle"
import initialState from "./initial-state"
import {CARDS} from "../constants"

export default function Cards(state = initialState.cards, action) {
  switch (action.type) {
    case "START_GAME":
      return take(shuffle(CARDS), 5)
    default:
      return state
  }
}
