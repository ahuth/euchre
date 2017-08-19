import React from "react"
import noop from "lodash/noop"
import {Flex} from "reflexbox"
import Card from "./card"
import Layout from "./layout"

export default function App({east, north, south, upCard, west}) {
  return (
    <Layout south={south} onCardClick={noop}>
      <Flex justify="center">
        <Card rank={upCard.rank} suit={upCard.suit} />
      </Flex>
    </Layout>
  )
}
