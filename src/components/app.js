import React from "react"
import Card from "./card"
import {Box, Flex} from "reflexbox"

export default function App() {
  return (
    <Flex p={1}>
      <Box p={1}><Card rank="A" suit="hearts" /></Box>
      <Box p={1}><Card rank="K" suit="clubs" /></Box>
      <Box p={1}><Card rank="Q" suit="diamonds" /></Box>
      <Box p={1}><Card rank="J" suit="spades" /></Box>
    </Flex>
  )
}
