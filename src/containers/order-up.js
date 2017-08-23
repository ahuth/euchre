import OrderUp from "../components/order-up"
import {branch, compose, renderNothing} from "recompose"
import {connect} from "react-redux"
import {dealHands} from "../actions"
import {hands} from "../selectors"

function mapStateToProps(state) {
  return {
    north: hands.getHand(state, "north"),
    south: hands.getHand(state, "south"),
    east: hands.getHand(state, "east"),
    west: hands.getHand(state, "west"),
    upCard: hands.getUpCard(state),
  }
}

export default compose(
  connect(mapStateToProps),
  branch(
    props => !props.upCard,
    renderNothing,
  ),
)(OrderUp)
