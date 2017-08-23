import head from "lodash/head"

export default function getUpCard(state) {
  return head(state.hands.kitty)
}
