import {useEffect} from 'react';
import {useStore} from '../store';
import Ordering from './Ordering';

export default function App() {
  const actions = useStore((state) => state.actions);
  const phase = useStore((state) => state.phase);

  useEffect(() => {
    actions.deal();
  }, []);

  return (
    <div className="p-8">
      {phase === 'ordering' ?
        <Ordering />
      : phase}
    </div>
  );
}
