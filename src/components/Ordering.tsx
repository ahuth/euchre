import {useCallback} from 'react';
import {store, useSelector} from '../store';
import Display from './Display';

/**
 * Going around the table and either passing or telling the dealer to pick it up.
 */
export default function Ordering() {
  const current = useSelector(store, (state) => state.context.current);

  const orderUp = useCallback(() => {
    store.send({type: 'orderUp'});
  }, []);

  const pass = useCallback(() => {
    store.send({type: 'passOrderUp'});
  }, []);

  return (
    <Display
      slot1={current === 0 && <Selector onOrderUp={orderUp} onPass={pass} />}
      slot2={current === 1 && <Selector onOrderUp={orderUp} onPass={pass} />}
      slot3={current === 2 && <Selector onOrderUp={orderUp} onPass={pass} />}
      slot4={current === 3 && <Selector onOrderUp={orderUp} onPass={pass} />}
    />
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
