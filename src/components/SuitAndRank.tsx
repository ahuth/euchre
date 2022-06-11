import React from 'react';
import clsx from 'clsx';
import { Ranks, Suits } from '../Card';

type Props = {
  rank: Ranks,
  suit: Suits,
}

export default function SuitAndRank({ rank, suit }: Props) {
  return (
    <div className={clsx('inline-block text-center', colors[suit])}>
      <div>{rankSymbols[rank]}</div>
      <div>{suitSymbols[suit]}</div>
    </div>
  );
}

const colors = {
  [Suits.Spades]: 'text-black',
  [Suits.Hearts]: 'text-red-600',
  [Suits.Clubs]: 'text-black',
  [Suits.Diamonds]: 'text-red-600',
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
