export default function playCard(card) {
  const min = -25
  const max = 25
  const randomRotation = Math.floor(Math.random() * (max - min + 1)) + min
  return {
    type: "PLAY_CARD",
    payload: {
      card: card,
      rotation: randomRotation,
    },
  }
}
