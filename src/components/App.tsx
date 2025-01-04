import {useEffect} from 'react';
import {store, useSelector} from '../store';
import Discarding from './Discarding';
import Display from './Display';
import Misdeal from './Misdeal';
import Ordering from './Ordering';
import Picking from './Picking';
import Playing from './Playing';

export default function App() {
  const phase = useSelector(store, (state) => state.context.phase);

  useEffect(() => {
    store.send({type: 'deal'});
  }, []);

  return (
    <div className="p-8">
      <div>{phase}</div>
      {phase === 'ordering' ?
        <Ordering />
      : phase === 'discarding' ?
        <Discarding />
      : phase === 'picking' ?
        <Picking />
      : phase === 'misdeal' ?
        <Misdeal />
      : phase === 'playing' ?
        <Playing />
      : <Display />}
    </div>
  );
}
