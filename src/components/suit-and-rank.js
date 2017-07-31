import React from "react"

export default function SuitAndRank({suit, rank}) {
  const styles = {
    color: colors[suit],
    display: "inline-block",
    textAlign: "center",
  }

  return (
    <div style={styles}>
      <div>{rank}</div>
      <div>{suits[suit]}</div>
    </div>
  )
}

const colors = {
  clubs: "black",
  diamonds: "red",
  hearts: "red",
  spades: "black",
}

const suits = {
  clubs: "♣",
  diamonds: "♦",
  hearts: "♥",
  spades: "♠",
}
