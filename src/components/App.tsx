import React from 'react';
import Back from './Back';
import Card from './Card';
import { Ranks, Suits } from '../Card';

export default function App() {
  return (
    <div>
      <Card rank={Ranks.Ace} suit={Suits.Hearts} />
      <br />
      <Back />
    </div>
  );
}
