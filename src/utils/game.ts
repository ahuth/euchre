import * as Hands from './hands';
import * as Round from './round';

export enum State { notStarted, playing, won, lost }

interface Game {
  round: Round.Type,
  score1: number,
  score2: number,
  state: State,
}

export type Type = Game;

/**
 * Start a new game.
 */
export function create(): Game {
  return {
    round: Round.create(Hands.Position.S),
    score1: 0,
    score2: 0,
    state: State.notStarted,
  };
}
