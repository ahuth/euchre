import React from "react"
import {Box, Flex} from "reflexbox"
import Back from "./back"
import Rotate from "./rotate"
import {Card} from "../types"

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function Pile({cards}) {
  return (
    <Flex justify="center" style={{position: "relative"}}>
      {cards.map((card) => {
        return (
          <Box key={Card.uniqueKey(card)} style={{position: "absolute"}}>
            <Rotate by={random(-10, 10)}>
              <Back />
            </Rotate>
          </Box>
        )
      })}
    </Flex>
  )
}
