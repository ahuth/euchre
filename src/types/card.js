function uniqueKey(card) {
  return `${card.rank}${card.suit}`
}

const ALL = [
  {rank: "9", suit: "clubs"},
  {rank: "10", suit: "clubs"},
  {rank: "J", suit: "clubs"},
  {rank: "Q", suit: "clubs"},
  {rank: "K", suit: "clubs"},
  {rank: "A", suit: "clubs"},
  {rank: "9", suit: "diamonds"},
  {rank: "10", suit: "diamonds"},
  {rank: "J", suit: "diamonds"},
  {rank: "Q", suit: "diamonds"},
  {rank: "K", suit: "diamonds"},
  {rank: "A", suit: "diamonds"},
  {rank: "9", suit: "hearts"},
  {rank: "10", suit: "hearts"},
  {rank: "J", suit: "hearts"},
  {rank: "Q", suit: "hearts"},
  {rank: "K", suit: "hearts"},
  {rank: "A", suit: "hearts"},
  {rank: "9", suit: "spades"},
  {rank: "10", suit: "spades"},
  {rank: "J", suit: "spades"},
  {rank: "Q", suit: "spades"},
  {rank: "K", suit: "spades"},
  {rank: "A", suit: "spades"},
]

export default {
  ALL: ALL,
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  uniqueKey: uniqueKey,
}
