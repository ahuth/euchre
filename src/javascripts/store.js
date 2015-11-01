"use strict";

var { createStore, combineReducers } = require("redux");
var reducers = require("./reducers");
var app = combineReducers(reducers);
var store = createStore(app);

module.exports = store;
