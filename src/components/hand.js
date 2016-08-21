import Card from "./card";
import PlayingCard from "../utils/playing-card";
import React from "react";

const styles = {
  container: {
    display: "flex",
    width: 385
  }
};

function Hand({cards}) {
  return (
    <div style={styles.container} className="hand">
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
