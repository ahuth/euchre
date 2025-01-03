import {useSelector} from '@xstate/store/react';
import {useCallback} from 'react';
import {store} from '../store';
import Hand from './Hand';

export default function Ordering() {
  const hand1 = useSelector(store, (state) => state.context.hand1);
  const hand2 = useSelector(store, (state) => state.context.hand2);
  const hand3 = useSelector(store, (state) => state.context.hand3);
  const hand4 = useSelector(store, (state) => state.context.hand4);
  const kitty = useSelector(store, (state) => state.context.kitty);
  const dealer = useSelector(store, (state) => state.context.dealer);
  const current = useSelector(store, (state) => state.context.current);

  const orderUp = useCallback(() => {
    store.send({type: 'orderUp'});
  }, []);

  const pass = useCallback(() => {
    store.send({type: 'passOrderUp'});
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Hand title="Hand 1" cards={hand1} dealer={dealer === 0} />
        {current === 0 && <Selector onOrderUp={orderUp} onPass={pass} />}
      </div>
      <div className="flex flex-wrap gap-2">
        <Hand title="Hand 2" cards={hand2} dealer={dealer === 1} />
        {current === 1 && <Selector onOrderUp={orderUp} onPass={pass} />}
      </div>
      <div className="flex flex-wrap gap-2">
        <Hand title="Hand 3" cards={hand3} dealer={dealer === 2} />
        {current === 2 && <Selector onOrderUp={orderUp} onPass={pass} />}
      </div>
      <div className="flex flex-wrap gap-2">
        <Hand title="Hand 4" cards={hand4} dealer={dealer === 3} />
        {current === 3 && <Selector onOrderUp={orderUp} onPass={pass} />}
      </div>
      <Hand title="Kitty" cards={kitty} dealer={false} />
    </div>
  );
}

function Selector({
  onOrderUp,
  onPass,
}: {
  onOrderUp: () => void;
  onPass: () => void;
}) {
  return (
    <div className="flex items-end gap-2">
      <button
        className="h-12 rounded bg-green-500 px-4 py-2 text-white"
        onClick={onOrderUp}
      >
        Order Up
      </button>
      <button
        className="h-12 rounded bg-red-500 px-4 py-2 text-white"
        onClick={onPass}
      >
        Pass
      </button>
    </div>
  );
}
