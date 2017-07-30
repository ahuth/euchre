import React from "react"

export default function SuitAndRank({suit, rank, bottom}) {
  const styles = {
    bottom: bottom && 4,
    color: colors[suit],
    display: "inline-block",
    position: "absolute",
    right: bottom && 4,
    textAlign: "center",
    transform: bottom && "rotate(180deg)",
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
