import React from 'react';
import Back from './Back';
import Card from './Card';
import sample from 'lodash/sample';
import { cards } from '../Card';

export default function App() {
  return (
    <div>
      <Card card={sample(cards)!} />
      <br />
      <Back />
    </div>
  );
}
