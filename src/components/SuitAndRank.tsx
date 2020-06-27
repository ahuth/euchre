import React, { useMemo } from 'react';
import { Ranks, Suits } from '../Card';

type Props = {
  rank: Ranks,
  suit: Suits,
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
      <div>{rankSymbols[rank]}</div>
      <div>{suitSymbols[suit]}</div>
    </div>
  );
}

const colors = {
  [Suits.Spades]: 'black',
  [Suits.Hearts]: 'red',
  [Suits.Clubs]: 'black',
  [Suits.Diamonds]: 'red',
};

const suitSymbols = {
  [Suits.Spades]: '♠',
  [Suits.Hearts]: '♥',
  [Suits.Clubs]: '♣',
  [Suits.Diamonds]: '♦',
};

const rankSymbols = {
  [Ranks.Four]: '4',
  [Ranks.Six]: '6',
  [Ranks.Nine]: '9',
  [Ranks.Ten]: '10',
  [Ranks.Jack]: 'J',
  [Ranks.Queen]: 'Q',
  [Ranks.King]: 'K',
  [Ranks.Ace]: 'A',
};
