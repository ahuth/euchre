import OrderUp from "../components/order-up"
import {branch, compose, renderNothing} from "recompose"
import {connect} from "react-redux"
import {getUpCard, isUserTurn} from "../selectors"

function mapStateToProps(state) {
  return {
    showButtons: isUserTurn(state),
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
