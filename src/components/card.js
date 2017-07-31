import React from "react"
import SuitAndRank from "./suit-and-rank"
import {Invert} from "./layout"

export default function Card({rank, suit}) {
  return (
    <div style={styles}>
      <SuitAndRank rank={rank} suit={suit} />
      <Invert position={{bottom: 4, right: 4}}>
        <SuitAndRank rank={rank} suit={suit} />
      </Invert>
    </div>
  )
}

const styles = {
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  height: 100,
  padding: 4,
  position: "relative",
  width: 75,
}
