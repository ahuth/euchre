import React from "react"
import {Box, Flex} from "reflexbox"
import Hand from "./hand"

export default function Layout({children, east, north, onCardClick, south, west}) {
  return (
    <Flex column justify="space-around" style={{height: "100vh"}}>
      <Box w={1} style={{height: 140}}>
        {children}
      </Box>
      <Box w={1} style={{height: 140}}>
        <Hand cards={south} onCardClick={onCardClick} />
      </Box>
    </Flex>
  )
}
