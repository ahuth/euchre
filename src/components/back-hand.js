import React from "react"
import {Box, Flex} from "reflexbox"
import Back from "./back"
import {Card as CardType} from "../types"

export default function BackHand({cards}) {
  return (
    <Flex justify="center">
      {cards.map((card) => {
        return (
          <Box key={CardType.uniqueKey(card)} m={-2}>
            <Back />
          </Box>
        )
      })}
    </Flex>
  )
}
