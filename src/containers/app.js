import App from "../components/app"
import {branch, compose, lifecycle, renderNothing} from "recompose"
import {connect} from "react-redux"
import {dealHands, playCard} from "../actions"
import {getHand, getUpCard} from "../selectors"

function mapStateToProps(state) {
  return {
    cards: getHand(state, "south"),
    upCard: getUpCard(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dealHands() {
      dispatch(dealHands())
    },
    handleCardClick(card) {
      dispatch(playCard(card))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.dealHands()
    }
  }),
  branch(
    props => !props.upCard,
    renderNothing,
  ),
)(App)
