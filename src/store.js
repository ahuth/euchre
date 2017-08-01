import * as reducers from "./reducers"
import {combineReducers, createStore} from "redux"

const root = combineReducers(reducers)
const store = createStore(root)

export default store
