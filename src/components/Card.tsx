import React from 'react';
import clsx from 'clsx';
import {Card as CardInstance} from '../Card';

type Props = {
  card: CardInstance
}

export function Card({ card }: Props) {
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

export function Back() {
  return (
    <div className="border border-white border-4 bg-gradient-to-r from-indigo-500 to-black shadow shadow-slate-400 w-[4.625rem] h-[6.25rem]" />
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
