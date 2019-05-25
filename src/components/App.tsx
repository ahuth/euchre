import React, { useReducer } from 'react';
import reducer from '../reducer';
import NotStarted from './NotStarted';
import * as Game from '../utils/game';

const initialState = Game.create();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  switch (state.state) {
    case (Game.State.NotStarted):
      return <NotStarted dispatch={dispatch} />;
    default:
      return null;
  }
}
