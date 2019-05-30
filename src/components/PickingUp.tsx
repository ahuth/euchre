import React, { useMemo } from 'react';
import { random } from 'lodash';
import Card from './Card';
import Rotate from './Rotate';
import { Action } from '../reducer';
import * as Game from '../utils/game';
import * as Deck from '../utils/deck';

type Props = {
  dispatch: React.Dispatch<Action>,
  state: Game.Type,
}

export default function PickingUp({ dispatch, state }: Props) {
  const rotation = useMemo(() => random(-2, 2), []);
  const topCard = Deck.peek(state.round.deck);

  return (
    <Rotate by={rotation}>
      <Card rank={topCard.rank} suit={topCard.suit} />
    </Rotate>
  );
}
