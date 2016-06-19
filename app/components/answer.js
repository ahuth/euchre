"use strict";

import React from "react";

function Answer({text, handleClick}) {
  return (
    <div onClick={handleClick} className="answer">
      <span>{text}</span>
    </div>
  );
}

Answer.propTypes = {
  text: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default Answer;
