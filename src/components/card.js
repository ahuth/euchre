import React from "react"
import {Box, Flex} from "reflexbox"
import Rotate from "./rotate"
import SuitAndRank from "./suit-and-rank"

export default function Card({onClick, rank, suit}) {
  return (
    <div onClick={onClick} style={styles}>
      <Flex column justify="space-between" style={{height: "100%"}}>
        <Box>
          <SuitAndRank rank={rank} suit={suit} />
        </Box>
        <Box>
          <Rotate by={180}>
            <SuitAndRank rank={rank} suit={suit} />
          </Rotate>
        </Box>
      </Flex>
    </div>
  )
}

const styles = {
  backgroundColor: "white",
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  height: 100,
  padding: 4,
  width: 75,
}
