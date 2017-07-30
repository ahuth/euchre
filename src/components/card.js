import React from "react"
import SuitAndRank from "./suit-and-rank"

export default function Card({ rank, suit }) {
  return (
    <div style={styles}>
      <SuitAndRank rank={rank} suit={suit} />
      <SuitAndRank rank={rank} suit={suit} bottom />
    </div>
  )
}

const styles = {
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  height: 175,
  padding: 4,
  position: "relative",
  width: 125,
}
