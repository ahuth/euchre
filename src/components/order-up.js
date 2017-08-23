import React from "react"
import noop from "lodash/noop"
import {Box, Flex} from "reflexbox"
import Card from "./card"
import Table from "./table"

export default function OrderUp({east, north, south, turn, upCard, west}) {
  return (
    <Table south={south} onCardClick={noop}>
      <Flex justify="center">
        <Flex align="center" column>
          <Card rank={upCard.rank} suit={upCard.suit} />
          <Box>
            {turn === "south" &&
              <div>
                <button>Pick it up!</button>
                <button>Pass</button>
              </div>
            }
          </Box>
        </Flex>
      </Flex>
    </Table>
  )
}
