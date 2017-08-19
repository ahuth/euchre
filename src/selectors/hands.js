import head from "lodash/head"

function getHand(state, position) {
  return state.hands[position]
}

function getUpCard(state) {
  return head(state.hands.kitty)
}

export default {
  getHand,
  getUpCard,
}
