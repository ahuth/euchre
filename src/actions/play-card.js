const minRotation = -25
const maxRotation = 25

export default function playCard(card) {
  const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1)) + minRotation
  return {
    type: "PLAY_CARD",
    payload: {
      card: card,
      rotation: randomRotation,
    },
  }
}
