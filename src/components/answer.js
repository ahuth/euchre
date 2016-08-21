import React from "react";

function Answer({text, handleClick}) {
  return (
    <div style={styles.container} onClick={handleClick} className="answer">
      <span>{text}</span>
    </div>
  );
}

Answer.propTypes = {
  text: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

var styles = {
  container: {
    display: "inline-block",
    padding: 4,
    margin: 4,
    border: "1px solid black",
    borderRadius: 4,
    cursor: "pointer"
  }
};

export default Answer;
