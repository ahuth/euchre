import type {Card} from '../cards';
import CardComponent from './Card';

type Props = {
  title: string;
  cards: Card[];
  dealer: boolean;
};

export default function Hand({title, cards, dealer}: Props) {
  return (
    <section>
      <h1 className="text-lg">
        {title} {dealer && '(dealer)'}
      </h1>
      <ul className="flex flex-wrap gap-2">
        {cards.map((card) => {
          return (
            <li key={`${card.rank}-${card.suit}`}>
              <CardComponent rank={card.rank} suit={card.suit} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
