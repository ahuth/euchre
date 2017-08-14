import initialState from "./initial-state"

export default function Played(state = initialState.played, action) {
  switch (action.type) {
    case "DEAL_HANDS":
      return initialState.played
    case "PLAY_CARD":
      return state.concat([{
        card: action.payload.card,
        rotation: action.payload.rotation,
      }])
    default:
      return state
  }
}
