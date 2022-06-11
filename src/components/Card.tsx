import React from 'react';
import clsx from 'clsx';
import {Card as CardInstance} from '../Card';

type Props = {
  card: CardInstance
}

export default function Card({ card }: Props) {
  return (
    <div className="bg-white flex flex-col justify-between p-1 w-[4.625rem] h-[6.25rem] shadow shadow-slate-400">
      <div>
        <SuitAndRank card={card} />
      </div>
      <div className="rotate-180">
        <SuitAndRank card={card} />
      </div>
    </div>
  );
}

function SuitAndRank({ card }: Props) {
  return (
    <div className={clsx('inline-block text-center', card.displayColor())}>
      <div>{card.displayRank()}</div>
      <div>{card.displaySuit()}</div>
    </div>
  );
}
