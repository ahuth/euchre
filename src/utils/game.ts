import * as Hands from './hands';
import * as Round from './round';

export enum State { NotStarted, Playing, Won, Lost }

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
    state: State.NotStarted,
  };
}

/**
 * Begin paying.
 */
export function start(game: Game): Game {
  return {
    ...game,
    round: Round.deal(game.round),
    state: State.Playing,
  };
}
