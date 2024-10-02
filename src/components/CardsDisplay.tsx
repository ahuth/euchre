import {useStore} from '../store';
import Card from './Card';

export default function CardsDisplay() {
  const hand1 = useStore((state) => state.hand1);
  const hand2 = useStore((state) => state.hand2);
  const hand3 = useStore((state) => state.hand3);
  const hand4 = useStore((state) => state.hand4);
  const kitty = useStore((state) => state.kitty);
  const dealer = useStore((state) => state.dealer);

  return (
    <ul className="flex flex-col gap-4">
      <li>
        <h1 className="text-lg">Hand 1 {dealer === 1 && '(dealer)'}</h1>
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
        <h1 className="text-lg">Hand 2 {dealer === 2 && '(dealer)'}</h1>
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
        <h1 className="text-lg">Hand 3 {dealer === 3 && '(dealer)'}</h1>
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
        <h1 className="text-lg">Hand 4 {dealer === 4 && '(dealer)'}</h1>
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
  );
}
