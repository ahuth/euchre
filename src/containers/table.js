import Table from "../components/table"
import {connect} from "react-redux"
import {getHand} from "../selectors"

function mapStateToProps(state) {
  return {
    north: getHand(state, "north"),
    south: getHand(state, "south"),
  }
}

export default connect(mapStateToProps)(Table)
