import React, { useMemo } from 'react';
import { random } from 'lodash';
import Card from './Card';
import Rotate from './Rotate';
import { Action } from '../reducer';
import { Type as Game } from '../utils/game';

type Props = {
  dispatch: React.Dispatch<Action>,
  state: Game,
}

export default function PickingUp({ dispatch, state }: Props) {
  const rotation = useMemo(() => random(-2, 2), []);
  const topCard = state.round.deck[0];

  return (
    <Rotate by={rotation}>
      <Card rank={topCard.rank} suit={topCard.suit} />
    </Rotate>
  );
}
