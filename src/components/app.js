import React from "react"
import {Box, Flex} from "reflexbox"
import Card from "./card"
import Rotate from "./rotate"
import {Card as CardType} from "../types"

export default function App({cards, handleCardClick, played}) {
  return (
    <Flex column justify="space-around" style={{height: "100vh"}}>
      <Flex w={1} justify="center" style={{position: "relative"}}>
        {played.map(({card, rotation}) => {
          return (
            <Box key={CardType.uniqueKey(card)} style={{position: "absolute"}}>
              <Rotate by={rotation}>
                <Card rank={card.rank} suit={card.suit} />
              </Rotate>
            </Box>
          )
        })}
      </Flex>
      <Box w={1}>
        <Flex p={1} justify="center">
          {cards.map((card) => {
            return (
              <Box key={CardType.uniqueKey(card)} p={1}>
                <Card onClick={handleCardClick.bind(this, card)} rank={card.rank} suit={card.suit} />
              </Box>
            )
          })}
        </Flex>
      </Box>
    </Flex>
  )
}
