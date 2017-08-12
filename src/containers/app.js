import App from "../components/app"
import {connect} from "react-redux"
import {compose, lifecycle} from "recompose"
import {dealHands, playCard} from "../actions"
import {getHand, getPlayed} from "../selectors"

function mapStateToProps(state) {
  return {
    cards: getHand(state, "south"),
    played: getPlayed(state),
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
  })
)(App)
