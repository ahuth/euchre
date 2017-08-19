import React from "react"
import {Box, Flex} from "reflexbox"
import Card from "./card"
import Layout from "./layout"

export default function App({cards, handleCardClick, upCard}) {
  return (
    <Layout cards={cards} onCardClick={handleCardClick}>
      <Flex justify="center">
        <Card rank={upCard.rank} suit={upCard.suit} />
      </Flex>
    </Layout>
  )
}
