import {useStore} from '../store';
import Hand from './Hand';

export default function Ordering() {
  const hand1 = useStore((state) => state.hand1);
  const hand2 = useStore((state) => state.hand2);
  const hand3 = useStore((state) => state.hand3);
  const hand4 = useStore((state) => state.hand4);
  const kitty = useStore((state) => state.kitty);
  const dealer = useStore((state) => state.dealer);
  const current = useStore((state) => state.current);

  return (
    <div className="flex flex-col gap-4">
      <Hand
        title="Hand 1"
        cards={hand1}
        dealer={dealer === 1}
        current={current === 1}
      />
      <Hand
        title="Hand 2"
        cards={hand2}
        dealer={dealer === 2}
        current={current === 2}
      />
      <Hand
        title="Hand 3"
        cards={hand3}
        dealer={dealer === 3}
        current={current === 3}
      />
      <Hand
        title="Hand 4"
        cards={hand4}
        dealer={dealer === 4}
        current={current === 4}
      />
      <Hand title="Kitty" cards={kitty} dealer={false} current={false} />
    </div>
  );
}
