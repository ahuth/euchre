import initialState from "./initial-state"

export default function Hands(state = initialState.played, action) {
  switch (action.type) {
    case "PLAY_CARD":
      return state.concat([{
        card: action.payload.card,
        rotation: action.payload.rotation,
      }])
    default:
      return state
  }
}
