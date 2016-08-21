"use strict";

import Card from "./card";
import PlayingCard from "../utils/playing-card";
import React from "react";

function Kitty({cards}) {
  return <Card card={cards[0]} />;
}

Kitty.propTypes = {
  cards: React.PropTypes.arrayOf(React.PropTypes.instanceOf(PlayingCard)).isRequired
};

export default Kitty;
