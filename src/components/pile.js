import React from "react"
import {Box, Flex} from "reflexbox"
import Card from "./card"
import Rotate from "./rotate"
import {Card as CardType} from "../types"

export default function Pile({cards}) {
  return (
    <Flex justify="center" style={{position: "relative"}}>
      {cards.map(({card, rotation}) => {
        return (
          <Box key={CardType.uniqueKey(card)} style={{position: "absolute"}}>
            <Rotate by={rotation}>
              <Card rank={card.rank} suit={card.suit} />
            </Rotate>
          </Box>
        )
      })}
    </Flex>
  )
}
