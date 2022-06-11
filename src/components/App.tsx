import React from 'react';
import Back from './Back';
import Card from './Card';
import CardInstance, { Ranks, Suits } from '../Card';

const testCard = new CardInstance(Ranks.Ace, Suits.Hearts);

export default function App() {
  return (
    <div>
      <Card card={testCard} />
      <br />
      <Back />
    </div>
  );
}
