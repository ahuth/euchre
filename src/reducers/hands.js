import shuffle from "lodash/shuffle"
import slice from "lodash/slice"
import without from "lodash/without"
import initialState from "./initial-state"
import {CARDS} from "../constants"

export default function Hands(state = initialState.hands, action) {
  switch (action.type) {
    case "DEAL_HANDS":
      const shuffled = shuffle(CARDS)
      return {
        north: slice(shuffled, 0, 5),
        south: slice(shuffled, 5, 10),
        east: slice(shuffled, 10, 15),
        west: slice(shuffled, 15, 20),
        kitty: slice(shuffled, 20),
      }
    case "PLAY_CARD":
      return {
        ...state,
        south: without(state.south, action.payload.card)
      }
    default:
      return state
  }
}
