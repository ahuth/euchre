import React from 'react';
import Card from './Card';
import { Ranks, Suits } from '../Card';

export default function App() {
  return (
    <div>
      <Card rank={Ranks.Ace} suit={Suits.Hearts} />
    </div>
  );
}
