import * as Card from './card';
import * as Hands from './hands';
import * as Round from './round';

export enum State { NotStarted, Playing, Done };

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

export function callTrump(game: Game, suit: Card.Suit, alone = false): Game {
  return {
    ...game,
    round: Round.callTrump(game.round, suit, alone),
  };
}

export function discard(game: Game, card: Card.Type): Game {
  return {
    ...game,
    round: Round.discard(game.round, card),
  };
}

export function pass(game: Game): Game {
  return {
    ...game,
    round: Round.pass(game.round),
  };
}

export function pickItUp(game: Game, alone = false): Game {
  return {
    ...game,
    round: Round.pickItUp(game.round, alone),
  };
}

export function playCard(game: Game, card: Card.Type): Game {
  return game;
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

function computeScore(result: Round.TrickResult): number {
  switch (result) {
    case Round.TrickResult.WonAllAlone:
      return 4;
    case Round.TrickResult.WonAll:
    case Round.TrickResult.WonAlone:
      return 2;
    case Round.TrickResult.Won:
      return 1;
    case Round.TrickResult.Pending:
    case Round.TrickResult.Lost:
      return 0;
  }
}
