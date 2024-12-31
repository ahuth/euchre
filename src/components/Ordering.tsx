import {useStore} from '../store';
import Hand from './Hand';

export default function Ordering() {
  const actions = useStore((state) => state.actions);
  const hand1 = useStore((state) => state.hand1);
  const hand2 = useStore((state) => state.hand2);
  const hand3 = useStore((state) => state.hand3);
  const hand4 = useStore((state) => state.hand4);
  const kitty = useStore((state) => state.kitty);
  const dealer = useStore((state) => state.dealer);
  const current = useStore((state) => state.current);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Hand title="Hand 1" cards={hand1} dealer={dealer === 0} />
        {current === 0 && (
          <Selector onOrderUp={actions.orderUp} onPass={actions.passOrderUp} />
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <Hand title="Hand 2" cards={hand2} dealer={dealer === 1} />
        {current === 1 && (
          <Selector onOrderUp={actions.orderUp} onPass={actions.passOrderUp} />
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <Hand title="Hand 3" cards={hand3} dealer={dealer === 2} />
        {current === 2 && (
          <Selector onOrderUp={actions.orderUp} onPass={actions.passOrderUp} />
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <Hand title="Hand 4" cards={hand4} dealer={dealer === 3} />
        {current === 3 && (
          <Selector onOrderUp={actions.orderUp} onPass={actions.passOrderUp} />
        )}
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
