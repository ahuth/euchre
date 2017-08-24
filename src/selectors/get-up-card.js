import head from "lodash/head"
import getHand from "./get-hand"

export default function getUpCard(state) {
  return head(getHand(state, "kitty"))
}
