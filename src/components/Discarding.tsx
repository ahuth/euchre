import {useCallback} from 'react';
import {store, useSelector} from '../store';
import type {Card} from '../cards';
import Display from './Display';

/**
 * After picking up the top card of the kitty, the dealer discards.
 */
export default function Discarding() {
  const dealer = useSelector(store, (state) => state.context.dealer);

  const discard = useCallback((card: Card) => {
    store.send({type: 'discard', card});
  }, []);

  return (
    <Display
      onHand1Click={dealer === 0 && discard}
      onHand2Click={dealer === 1 && discard}
      onHand3Click={dealer === 2 && discard}
      onHand4Click={dealer === 3 && discard}
    />
  );
}
