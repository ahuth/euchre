"use strict";

import Card from "./card";
import React from "react";

function Hand({cards}) {
  return (
    <div className="hand">
      {cards.map(function (card, index) {
        return <Card face={card.face} suit={card.suit} key={index} />;
      })}
    </div>
  );
}

Hand.propTypes = {
  cards: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default Hand;
