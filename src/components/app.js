import React from "react"
import {Box, Flex} from "reflexbox"
import Hand from "./hand"
import Card from "./card"

export default function App({cards, handleCardClick, upCard}) {
  return (
    <Flex column justify="space-around" style={{height: "100vh"}}>
      <Box w={1} style={{height: 100}}>
        <Flex justify="center">
          <Card rank={upCard.rank} suit={upCard.suit} />
        </Flex>
      </Box>
      <Box w={1} style={{height: 100}}>
        <Hand cards={cards} onCardClick={handleCardClick} />
      </Box>
    </Flex>
  )
}
