import * as Round from './round';

interface Game {
  round: Round.Type,
  score1: number,
  score2: number,
}

export type Type = Game;

/**
 * Start a new game.
 */
export function create(): Game {
  return {
    round: Round.create(Round.Position.S),
    score1: 0,
    score2: 0,
  };
}
