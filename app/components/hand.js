"use strict";

import Card from "./card";
import PlayingCard from "../utils/playing-card";
import React from "react";

function Hand({cards}) {
  return (
    <div className="hand">
      {cards.map(function (card, index) {
        return <Card card={card} key={index} />;
      })}
    </div>
  );
}

Hand.propTypes = {
  cards: React.PropTypes.arrayOf(React.PropTypes.instanceOf(PlayingCard)).isRequired
};

export default Hand;
