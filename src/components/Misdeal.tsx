import {store} from '../store';
import Display from './Display';

/**
 * No suit was chosen, so move on to the next hand.
 */
export default function Misdeal() {
  return (
    <>
      <button
        className="h-12 rounded bg-green-500 px-4 py-2 text-white"
        onClick={() => store.send({type: 'deal'})}
      >
        Deal next hand
      </button>
      <Display />
    </>
  );
}
