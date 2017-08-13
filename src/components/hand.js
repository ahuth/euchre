import React from "react"
import {Box, Flex} from "reflexbox"
import Card from "./card"
import {Card as CardType} from "../types"

export default function Hand({cards, onCardClick}) {
  return (
    <Flex p={1} justify="center">
      {cards.map((card) => {
        return (
          <Box key={CardType.uniqueKey(card)} p={1}>
            <Card onClick={onCardClick.bind(this, card)} rank={card.rank} suit={card.suit} />
          </Box>
        )
      })}
    </Flex>
  )
}
