import head from "lodash/head"

export function getHand(state, position) {
  return state.hands[position]
}

export function getUpCard(state) {
  return head(state.hands.kitty)
}
