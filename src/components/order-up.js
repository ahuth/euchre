import React from "react"
import noop from "lodash/noop"
import {Flex} from "reflexbox"
import Card from "./card"
import Table from "./table"

export default function OrderUp({east, north, south, upCard, west}) {
  return (
    <Table south={south} onCardClick={noop}>
      <Flex justify="center">
        <Card rank={upCard.rank} suit={upCard.suit} />
      </Flex>
    </Table>
  )
}
