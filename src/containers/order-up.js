import OrderUp from "../components/order-up"
import {branch, compose, renderNothing} from "recompose"
import {connect} from "react-redux"
import {getHand, getTurn, getUpCard} from "../selectors"

function mapStateToProps(state) {
  return {
    south: getHand(state, "south"),
    turn: getTurn(state),
    upCard: getUpCard(state),
  }
}

export default compose(
  connect(mapStateToProps),
  branch(
    props => !props.upCard,
    renderNothing,
  ),
)(OrderUp)
