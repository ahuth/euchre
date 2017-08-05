import App from "../components/app"
import {connect} from "react-redux"
import {compose, lifecycle} from "recompose"
import {dealHands} from "../actions"
import {getHand} from "../selectors"

function mapStateToProps(state) {
  return {
    cards: getHand(state, "south"),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dealHands() {
      dispatch(dealHands())
    }
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
