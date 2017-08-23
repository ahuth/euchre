import getTurn from "./get-turn"

export default function isUserTurn(state) {
  return getTurn(state) === "south"
}
