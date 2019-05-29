import React from 'react';
import PickingUp from './PickingUp';
import { Action } from '../reducer';
import * as Game from '../utils/game';
import * as Round from '../utils/round';

type Props = {
  dispatch: React.Dispatch<Action>,
  state: Game.Type,
}

export default function Playing({ dispatch, state }: Props) {
  switch (state.round.phase) {
    case (Round.Phase.PickingUp):
      return <PickingUp dispatch={dispatch} state={state} />;
    default:
      return null;
  }
}
