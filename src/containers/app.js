import App from "../components/app"
import {connect} from "react-redux"

function mapStateToProps(state) {
  return {
    cards: state.cards,
  }
}

export default connect(mapStateToProps)(App)
