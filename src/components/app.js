import React from "react"
import Card from "./card"
import {Box, Flex} from "reflexbox"

export default function App({cards}) {
  return (
    <Flex column justify="space-around" style={{height: "100vh"}}>
      <Box w={1}></Box>
      <Box w={1}>
        <Flex p={1} justify="center">
          {cards.map((card) => {
            return (
              <Box key={`${card.rank}${card.suit}`} p={1}>
                <Card rank={card.rank} suit={card.suit} />
              </Box>
            )
          })}
        </Flex>
      </Box>
    </Flex>
  )
}
