import React from "react"
import {Box, Flex} from "reflexbox"
import Card from "./card"
import Hand from "./hand"
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
        <Hand cards={cards} onCardClick={handleCardClick} />
      </Box>
    </Flex>
  )
}
