import type {ReactNode} from 'react';
import type {Card} from '../cards';
import {store, useSelector} from '../store';
import Hand from './Hand';

type Props = {
  onHand1Click?: ((card: Card) => void) | false;
  onHand2Click?: ((card: Card) => void) | false;
  onHand3Click?: ((card: Card) => void) | false;
  onHand4Click?: ((card: Card) => void) | false;
  slot1?: ReactNode;
  slot2?: ReactNode;
  slot3?: ReactNode;
  slot4?: ReactNode;
};

/**
 * Show all the cards in the game. Base for other components for now. Also useful for debugging.
 */
export default function Display(props: Props) {
  const hand1 = useSelector(store, (state) => state.context.hand1);
  const hand2 = useSelector(store, (state) => state.context.hand2);
  const hand3 = useSelector(store, (state) => state.context.hand3);
  const hand4 = useSelector(store, (state) => state.context.hand4);
  const kitty = useSelector(store, (state) => state.context.kitty);
  const dealer = useSelector(store, (state) => state.context.dealer);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Hand
          title="Hand 1"
          cards={hand1}
          dealer={dealer === 0}
          onCardClick={props.onHand1Click}
        />
        {props.slot1}
      </div>
      <div className="flex flex-wrap gap-2">
        <Hand
          title="Hand 2"
          cards={hand2}
          dealer={dealer === 1}
          onCardClick={props.onHand2Click}
        />
        {props.slot2}
      </div>
      <div className="flex flex-wrap gap-2">
        <Hand
          title="Hand 3"
          cards={hand3}
          dealer={dealer === 2}
          onCardClick={props.onHand3Click}
        />
        {props.slot3}
      </div>
      <div className="flex flex-wrap gap-2">
        <Hand
          title="Hand 4"
          cards={hand4}
          dealer={dealer === 3}
          onCardClick={props.onHand4Click}
        />
        {props.slot4}
      </div>
      <Hand title="Kitty" cards={kitty} dealer={false} />
    </div>
  );
}
