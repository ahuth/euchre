import {store, useSelector} from '../store';
import Display from './Display';

/**
 * Going around the table and either passing or telling the dealer to pick it up.
 */
export default function Ordering() {
  const current = useSelector(store, (state) => state.context.current);

  return (
    <Display
      slot1={current === 0 && <Selector />}
      slot2={current === 1 && <Selector />}
      slot3={current === 2 && <Selector />}
      slot4={current === 3 && <Selector />}
    />
  );
}

function Selector() {
  return (
    <div className="flex items-end gap-2">
      <button
        className="h-12 rounded bg-green-500 px-4 py-2 text-white"
        onClick={() => store.send({type: 'orderUp'})}
      >
        Order Up
      </button>
      <button
        className="h-12 rounded bg-red-500 px-4 py-2 text-white"
        onClick={() => store.send({type: 'passOrderUp'})}
      >
        Pass
      </button>
    </div>
  );
}
