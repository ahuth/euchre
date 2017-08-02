import React from "react"
import {Box, Flex} from "reflexbox"
import Invert from "./invert"
import SuitAndRank from "./suit-and-rank"

export default function Card({rank, suit}) {
  return (
    <div style={styles}>
      <Flex column justify="space-between" style={{height: "100%"}}>
        <Box>
          <SuitAndRank rank={rank} suit={suit} />
        </Box>
        <Box>
          <Invert>
            <SuitAndRank rank={rank} suit={suit} />
          </Invert>
        </Box>
      </Flex>
    </div>
  )
}

const styles = {
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  height: 100,
  padding: 4,
  width: 75,
}
