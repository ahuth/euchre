import React from "react"
import Card from "./card"

export default function App() {
  return (
    <div>
      <Card rank="A" suit="hearts" />
      <Card rank="K" suit="clubs" />
      <Card rank="Q" suit="diamonds" />
      <Card rank="J" suit="spades" />
    </div>
  )
}
