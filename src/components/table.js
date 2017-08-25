import React from "react"
import {Box, Flex} from "reflexbox"
import BackHand from "./back-hand"
import Hand from "./hand"

export default function Table({children, north, onCardClick, south}) {
  return (
    <Flex column justify="space-around" style={{height: "100vh"}}>
      <Box>
        <BackHand cards={north} />
      </Box>
      <Box w={1} style={{height: 140}}>
        {children}
      </Box>
      <Box w={1} style={{height: 140}}>
        <Hand cards={south} onCardClick={onCardClick} />
      </Box>
    </Flex>
  )
}
