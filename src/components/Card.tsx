import React from 'react';
import SuitAndRank from './SuitAndRank';
import { Ranks, Suits } from '../Card';

type Props = {
  rank: Ranks,
  suit: Suits,
}

export default function Card({ rank, suit }: Props) {
  return (
    <div className="bg-white flex flex-col justify-between p-1 w-[4.625rem] h-[6.25rem] shadow shadow-slate-400">
      <div>
        <SuitAndRank rank={rank} suit={suit} />
      </div>
      <div className="rotate-180">
        <SuitAndRank rank={rank} suit={suit} />
      </div>
    </div>
  );
}
