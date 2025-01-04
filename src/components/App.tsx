import {useEffect} from 'react';
import {store, useSelector} from '../store';
import Discarding from './Discarding';
import Display from './Display';
import Ordering from './Ordering';
import Picking from './Picking';

export default function App() {
  const phase = useSelector(store, (state) => state.context.phase);

  useEffect(() => {
    store.send({type: 'deal'});
  }, []);

  return (
    <div className="p-8">
      {phase}
      {phase === 'ordering' ?
        <Ordering />
      : phase === 'discarding' ?
        <Discarding />
      : phase === 'picking' ?
        <Picking />
      : <Display />}
    </div>
  );
}
