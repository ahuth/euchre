import shuffle from "lodash/shuffle"
import take from "lodash/take"
import initialState from "./initial-state"
import {CARDS} from "../constants"

export default function Hands(state = initialState.hands, action) {
  switch (action.type) {
    case "START_GAME":
      return {...state, south: take(shuffle(CARDS), 5)}
    default:
      return state
  }
}
