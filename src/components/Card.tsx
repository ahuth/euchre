import React from 'react';
import SuitAndRank from './SuitAndRank';
import {Card as CardInstance} from '../Card';

type Props = {
  card: CardInstance
}

export default function Card({ card }: Props) {
  return (
    <div className="bg-white flex flex-col justify-between p-1 w-[4.625rem] h-[6.25rem] shadow shadow-slate-400">
      <div>
        <SuitAndRank rank={card.rank} suit={card.suit} />
      </div>
      <div className="rotate-180">
        <SuitAndRank rank={card.rank} suit={card.suit} />
      </div>
    </div>
  );
}
