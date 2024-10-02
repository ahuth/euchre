import {useStore} from '../store';
import Card from './Card';

export default function App() {
  const hand = useStore((state) => state.hand);

  return (
    <div className="p-8">
      <ul className="flex flex-wrap gap-2">
        {hand.map((card) => {
          return (
            <li key={`${card.rank}-${card.suit}`}>
              <Card rank={card.rank} suit={card.suit} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
