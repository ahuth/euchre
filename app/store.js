"use strict";

import * as reducers from "./reducers";
import {combineReducers, createStore} from "redux"
var root = combineReducers(reducers);
var store = createStore(root);

export default store;
