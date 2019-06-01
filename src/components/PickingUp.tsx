import React from 'react';
import Card from './Card';
import { Action } from '../reducer';
import * as Game from '../utils/game';
import * as Deck from '../utils/deck';

type Props = {
  dispatch: React.Dispatch<Action>,
  state: Game.Type,
}

export default function PickingUp({ dispatch, state }: Props) {
  const topCard = Deck.peek(state.round.deck);

  return (
    <Card rank={topCard.rank} suit={topCard.suit} />
  );
}
