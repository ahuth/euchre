import React from 'react';
import Rotate from './Rotate';
import SuitAndRank from './SuitAndRank';
import { Ranks, Suits } from '../Card';

type Props = {
  rank: Ranks,
  suit: Suits,
}

export default function Card({ rank, suit }: Props) {
  return (
    <div style={styles.container}>
      <div>
        <SuitAndRank rank={rank} suit={suit} />
      </div>
      <Rotate by={180}>
        <SuitAndRank rank={rank} suit={suit} />
      </Rotate>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    display: 'flex',
    flexDirection: 'column',
    height: 100,
    justifyContent: 'space-between',
    padding: 4,
    width: 75,
  },
} as const;
