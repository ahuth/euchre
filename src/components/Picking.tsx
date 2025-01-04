import clsx from 'clsx';
import {suitToSymbol, type Suit} from '../cards';
import {store, useSelector} from '../store';
import Display from './Display';

/**
 * Picking the suit directly because noone ordered up the top card.
 */
export default function Picking() {
  const current = useSelector(store, (state) => state.context.current);
  const kitty = useSelector(store, (state) => state.context.kitty);
  const topCard = kitty[0];

  return (
    <Display
      slot1={current === 0 && <Selector except={topCard.suit} />}
      slot2={current === 1 && <Selector except={topCard.suit} />}
      slot3={current === 2 && <Selector except={topCard.suit} />}
      slot4={current === 3 && <Selector except={topCard.suit} />}
    />
  );
}

function Selector({except}: {except: Suit}) {
  const suits = ['clubs', 'diamonds', 'hearts', 'spades'] as const;
  const availableSuits = suits.filter((suit) => suit !== except);

  return (
    <div className="flex items-end gap-2">
      {availableSuits.map((suit) => (
        <button
          key={suit}
          className={clsx(
            'h-12 rounded border border-black px-4 py-2',
            suit === 'hearts' && 'text-red-500',
            suit === 'diamonds' && 'text-red-500',
            suit === 'clubs' && 'text-black',
            suit === 'spades' && 'text-black',
          )}
          onClick={() => store.send({type: 'pickSuit', suit})}
        >
          {suitToSymbol(suit)}
        </button>
      ))}
      <button
        className="h-12 rounded bg-red-500 px-4 py-2 text-white"
        onClick={() => store.send({type: 'passPickSuit'})}
      >
        Pass
      </button>
    </div>
  );
}
