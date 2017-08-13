function uniqueKey(card) {
  return `${card.rank}${card.suit}`
}

export default {
  uniqueKey: uniqueKey,
}
