import React from 'react';
import PickingUp from './PickingUp';
import { Action } from '../reducer';
import { Type as Game } from '../utils/game';
import { Phase } from '../utils/round';

type Props = {
  dispatch: React.Dispatch<Action>,
  state: Game,
}

export default function Playing({ dispatch, state }: Props) {
  switch (state.round.phase) {
    case (Phase.PickingUp):
      return <PickingUp dispatch={dispatch} state={state} />;
    default:
      return null;
  }
}
