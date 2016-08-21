import Answer from "../answer";
import React from "react";

function ShouldOrderUp({handlePass, handleOrderUp}) {
  return (
    <div className="should-order-up">
      <Answer text="Pass" handleClick={handlePass} />
      <Answer text="Order Up" handleClick={handleOrderUp} />
    </div>
  );
}

ShouldOrderUp.propTypes = {
  handlePass: React.PropTypes.func.isRequired,
  handleOrderUp: React.PropTypes.func.isRequired
};

export default ShouldOrderUp;
