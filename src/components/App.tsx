import React from 'react';
import Card from './Card';
import { Suit } from '../utils/card';

export default function App() {
  return <Card rank="A" suit={Suit.hearts} />
}
