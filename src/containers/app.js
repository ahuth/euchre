import App from "../components/app"
import {compose, lifecycle} from "recompose"
import {connect} from "react-redux"
import {dealHands} from "../actions"
import {getPhase} from "../selectors"

function mapStateToProps(state) {
  return {
    phase: getPhase(state),
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
)(App)
