"use strict";

import Card from "./card";
import PlayingCard from "../utils/playing-card";
import React from "react";

function Kitty({cards}) {
  return (
    <div>
      <Card card={cards[0]} />
    </div>
  );
}

Kitty.propTypes = {
  cards: React.PropTypes.arrayOf(React.PropTypes.instanceOf(PlayingCard)).isRequired
};

export default Kitty;
