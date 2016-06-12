"use strict";

import React from "react";

function Card({face, suit}) {
  return <div style={styles}>Hi</div>;
}

Card.propTypes = {
  face: React.PropTypes.string.isRequired,
  suit: React.PropTypes.string.isRequired
};

var styles = {};

export default Card;
