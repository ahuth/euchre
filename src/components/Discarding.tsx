import {useCallback} from 'react';
import {store, useSelector} from '../store';
import type {Card} from '../cards';
import Hand from './Hand';

export default function Discarding() {
  const hand1 = useSelector(store, (state) => state.context.hand1);
  const hand2 = useSelector(store, (state) => state.context.hand2);
  const hand3 = useSelector(store, (state) => state.context.hand3);
  const hand4 = useSelector(store, (state) => state.context.hand4);
  const kitty = useSelector(store, (state) => state.context.kitty);
  const dealer = useSelector(store, (state) => state.context.dealer);

  const discard = useCallback((card: Card) => {
    store.send({type: 'discard', card});
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Hand
          title="Hand 1"
          cards={hand1}
          dealer={dealer === 0}
          onCardClick={dealer === 0 && discard}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Hand
          title="Hand 2"
          cards={hand2}
          dealer={dealer === 1}
          onCardClick={dealer === 1 && discard}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Hand
          title="Hand 3"
          cards={hand3}
          dealer={dealer === 2}
          onCardClick={dealer === 2 && discard}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Hand
          title="Hand 4"
          cards={hand4}
          dealer={dealer === 3}
          onCardClick={dealer === 3 && discard}
        />
      </div>
      <Hand title="Kitty" cards={kitty} dealer={false} />
    </div>
  );
}
