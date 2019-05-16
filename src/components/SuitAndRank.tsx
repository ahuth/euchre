import React, { useMemo } from 'react';
import { Rank, Suit } from '../utils/card';

type Props = {
  rank: Rank,
  suit: Suit,
}

export default function SuitAndRank({ rank, suit }: Props) {
  const styles = useMemo(() => {
    return {
      color: colors[suit],
      display: 'inline-block',
      textAlign: 'center',
    } as const;
  }, [suit]);

  return (
    <div style={styles}>
      <div>{rank}</div>
      <div>{suits[suit]}</div>
    </div>
  );
}

const colors = {
  clubs: 'black',
  diamonds: 'red',
  hearts: 'red',
  spades: 'black',
};

const suits = {
  clubs: '♣',
  diamonds: '♦',
  hearts: '♥',
  spades: '♠',
};
