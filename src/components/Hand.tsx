import type {Card} from '../cards';
import CardComponent from './Card';

type Props = {
  title: string;
  cards: Card[];
  dealer: boolean;
  onCardClick?: ((card: Card) => void) | false;
};

export default function Hand({title, cards, dealer, onCardClick}: Props) {
  return (
    <section>
      <h1 className="text-lg">
        {title} {dealer && '(dealer)'}
      </h1>
      <ul className="flex flex-wrap gap-2">
        {cards.map((card) => {
          return (
            <li key={`${card.rank}-${card.suit}`}>
              {onCardClick ?
                <button
                  className="motion-safe:transform motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-1"
                  onClick={() => onCardClick(card)}
                >
                  <CardComponent rank={card.rank} suit={card.suit} />
                </button>
              : <CardComponent rank={card.rank} suit={card.suit} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
