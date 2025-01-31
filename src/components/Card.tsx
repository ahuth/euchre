import clsx from 'clsx';
import {suitToSymbol, type Rank, type Suit} from '../cards';

type Props = {
  rank: Rank;
  suit: Suit;
};

const colors = {
  hearts: 'text-red-600',
  diamonds: 'text-red-600',
  clubs: 'text-black',
  spades: 'text-black',
};

export default function Card({rank, suit}: Props) {
  return (
    <div
      className={clsx(
        'h-12 w-10 rounded border border-black bg-white p-2 text-center shadow',
        'flex items-center justify-center',
        colors[suit],
      )}
    >
      {rank}
      {suitToSymbol(suit)}
    </div>
  );
}
