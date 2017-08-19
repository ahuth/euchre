import App from "../components/app"
import {branch, compose, lifecycle, renderNothing} from "recompose"
import {connect} from "react-redux"
import {dealHands} from "../actions"
import {hands} from "../selectors"

function mapStateToProps(state) {
  return {
    south: hands.getHand(state, "south"),
    upCard: hands.getUpCard(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dealHands() {
      dispatch(dealHands())
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
