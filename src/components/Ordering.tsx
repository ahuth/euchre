import {store, useSelector} from '../store';
import Button from './ui/Button';
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
      <Button onClick={() => store.send({type: 'orderUp'})}>Order Up</Button>
      <Button onClick={() => store.send({type: 'passOrderUp'})} variant="warn">
        Pass
      </Button>
    </div>
  );
}
