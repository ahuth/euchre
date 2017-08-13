import React from "react"
import {Box, Flex} from "reflexbox"
import Hand from "./hand"
import Pile from "./pile"

export default function App({cards, handleCardClick, played}) {
  return (
    <Flex column justify="space-around" style={{height: "100vh"}}>
      <Pile cards={played} />
      <Box w={1}>
        <Hand cards={cards} onCardClick={handleCardClick} />
      </Box>
    </Flex>
  )
}
