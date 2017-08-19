import React from "react"
import {Box, Flex} from "reflexbox"
import Hand from "./hand"

export default function Layout({cards, children, onCardClick}) {
  return (
    <Flex column justify="space-around" style={{height: "100vh"}}>
      <Box w={1} style={{height: 100}}>
        {children}
      </Box>
      <Box w={1} style={{height: 100}}>
        <Hand cards={cards} onCardClick={onCardClick} />
      </Box>
    </Flex>
  )
}
