import React from "react"
import Card from "./card"
import {Box, Flex} from "reflexbox"

export default function App({cards}) {
  return (
    <Flex p={1}>
      {cards.map((card) => {
        return (
          <Box key={`${card.rank}${card.suit}`} p={1}>
            <Card rank={card.rank} suit={card.suit} />
          </Box>
        )
      })}
    </Flex>
  )
}
