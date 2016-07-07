"use strict";

import * as reducers from "./reducers";
import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux"
var root = combineReducers(reducers);
var store = createStore(root, applyMiddleware(thunkMiddleware));

export default store;
