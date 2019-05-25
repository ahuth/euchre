import React from 'react';
import { Action } from '../reducer';

type Props = {
  dispatch: React.Dispatch<Action>,
}

export default function NotStarted({ dispatch }: Props) {
  return (
    <div>
      <button onClick={() => dispatch({ type: 'start' })}>Deal 'em!</button>
    </div>
  );
}
