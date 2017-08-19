import React from "react"
import {Box, Flex} from "reflexbox"
import Hand from "./hand"
import Pile from "./pile"

export default function App({cards, handleCardClick, played}) {
  return (
    <Flex column justify="space-around" style={{height: "100vh"}}>
      <Box w={1} style={{height: 100}}>
        <Pile cards={played} />
      </Box>
      <Box w={1} style={{height: 100}}>
        <Hand cards={cards} onCardClick={handleCardClick} />
      </Box>
    </Flex>
  )
}
