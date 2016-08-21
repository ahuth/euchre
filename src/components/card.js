import PlayingCard from "../utils/playing-card";
import React from "react";

const styles = {
  card: {
    height: 100,
    width: 75,
    border: "1px solid black",
    borderRadius: 5,
    fontSize: 22
  }
};

function Card({card}) {
  return (
    <div style={styles.card} className="card">
      <span style={{color: card.color()}}>{card.toString()}</span>
    </div>
  );
}

Card.propTypes = {
  card: React.PropTypes.instanceOf(PlayingCard).isRequired
};

export default Card;
