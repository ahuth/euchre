import React, { useReducer } from 'react';
import reducer from '../reducer';
import NotStarted from './NotStarted';
import Playing from './Playing';
import * as Game from '../utils/game';

const initialState = Game.create();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  switch (state.state) {
    case (Game.State.NotStarted):
      return <NotStarted dispatch={dispatch} />;
    case (Game.State.Playing):
      return <Playing dispatch={dispatch} state={state} />;
    default:
      return null;
  }
}
