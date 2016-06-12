"use strict";

import * as reducers from "./reducers";
import {combineReducers, createStore} from "redux"
var app = combineReducers(reducers);
var store = createStore(app);

export default store;
