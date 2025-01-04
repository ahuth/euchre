import {store} from '../store';
import Button from './ui/Button';
import Display from './Display';

/**
 * No suit was chosen, so move on to the next hand.
 */
export default function Misdeal() {
  return (
    <>
      <Button onClick={() => store.send({type: 'deal'})}>Deal next hand</Button>
      <Display />
    </>
  );
}
