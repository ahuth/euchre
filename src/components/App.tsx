import {useEffect} from 'react';
import {useStore} from '../store';
import CardsDisplay from './CardsDisplay';

export default function App() {
  const actions = useStore((state) => state.actions);

  useEffect(() => {
    actions.deal();
  }, []);

  return (
    <div className="p-8">
      <CardsDisplay />
    </div>
  );
}
