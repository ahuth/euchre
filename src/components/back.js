import React from "react"
import {Card} from "../types"

export default function Back() {
  return <div style={styles}></div>
}

const styles = {
  backgroundImage: "repeating-linear-gradient(135deg, red, red 5px, white 5px, white 10px)",
  border: "4px solid white",
  boxShadow: Card.boxShadow,
  height: 100,
  width: 75,
}
