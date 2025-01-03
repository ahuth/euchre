import {useEffect} from 'react';
import {store, useSelector} from '../store';
import Ordering from './Ordering';

export default function App() {
  const phase = useSelector(store, (state) => state.context.phase);

  useEffect(() => {
    store.send({type: 'deal'});
  }, []);

  return (
    <div className="p-8">
      {phase === 'ordering' ?
        <Ordering />
      : phase}
    </div>
  );
}
