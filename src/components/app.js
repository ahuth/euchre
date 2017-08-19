import React from "react"
import noop from "lodash/noop"
import {Flex} from "reflexbox"
import Card from "./card"
import Layout from "./layout"

export default function App({cards, upCard}) {
  return (
    <Layout cards={cards} onCardClick={noop}>
      <Flex justify="center">
        <Card rank={upCard.rank} suit={upCard.suit} />
      </Flex>
    </Layout>
  )
}
