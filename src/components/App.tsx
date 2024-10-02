import {useEffect} from 'react';
import {useStore} from '../store';
import Card from './Card';

export default function App() {
  const actions = useStore((state) => state.actions);
  const hand1 = useStore((state) => state.hand1);
  const hand2 = useStore((state) => state.hand2);
  const hand3 = useStore((state) => state.hand3);
  const hand4 = useStore((state) => state.hand4);
  const kitty = useStore((state) => state.kitty);

  useEffect(() => {
    actions.deal();
  }, []);

  return (
    <div className="p-8">
      <ul className="flex flex-col gap-4">
        <li>
          <h1 className="text-lg">Hand 1</h1>
          <ul className="flex flex-wrap gap-2">
            {hand1.map((card) => {
              return (
                <li key={`${card.rank}-${card.suit}`}>
                  <Card rank={card.rank} suit={card.suit} />
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <h1 className="text-lg">Hand 2</h1>
          <ul className="flex flex-wrap gap-2">
            {hand2.map((card) => {
              return (
                <li key={`${card.rank}-${card.suit}`}>
                  <Card rank={card.rank} suit={card.suit} />
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <h1 className="text-lg">Hand 3</h1>
          <ul className="flex flex-wrap gap-2">
            {hand3.map((card) => {
              return (
                <li key={`${card.rank}-${card.suit}`}>
                  <Card rank={card.rank} suit={card.suit} />
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <h1 className="text-lg">Hand 4</h1>
          <ul className="flex flex-wrap gap-2">
            {hand4.map((card) => {
              return (
                <li key={`${card.rank}-${card.suit}`}>
                  <Card rank={card.rank} suit={card.suit} />
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <h1 className="text-lg">Kitty</h1>
          <ul className="flex flex-wrap gap-2">
            {kitty.map((card) => {
              return (
                <li key={`${card.rank}-${card.suit}`}>
                  <Card rank={card.rank} suit={card.suit} />
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}
