import OrderUp from "../components/order-up"
import {branch, compose, renderNothing} from "recompose"
import {connect} from "react-redux"
import {dealHands} from "../actions"
import {getHand, getUpCard} from "../selectors"

function mapStateToProps(state) {
  return {
    north: getHand(state, "north"),
    south: getHand(state, "south"),
    east: getHand(state, "east"),
    west: getHand(state, "west"),
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
