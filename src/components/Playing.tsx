import {store, useSelector} from '../store';
import Display from './Display';

/**
 * Now we're playing cards!
 */
export default function Ordering() {
  const current = useSelector(store, (state) => state.context.current);

  return (
    <Display
      onHand1Click={
        current === 0 && ((card) => store.send({type: 'playCard', card}))
      }
      onHand2Click={
        current === 1 && ((card) => store.send({type: 'playCard', card}))
      }
      onHand3Click={
        current === 2 && ((card) => store.send({type: 'playCard', card}))
      }
      onHand4Click={
        current === 3 && ((card) => store.send({type: 'playCard', card}))
      }
    />
  );
}
