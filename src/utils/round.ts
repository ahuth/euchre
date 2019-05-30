import * as Card from './card';
import * as Deck from './deck';
import * as Hands from './hands';

export enum Phase { Starting, PickingUp, Discarding, CallingTrump, TrickTaking }

interface Round {
  alone: boolean,
  called?: Hands.Position,
  current: Hands.Position,
  dealer: Hands.Position,
  deck: Deck.Type,
  hands: Hands.Type,
  phase: Phase,
  trump?: Card.Suit,
}

export type Type = Round;

/**
 * Start a new round.
 */
export function create(dealer: Hands.Position): Round {
  return {
    alone: false,
    current: Hands.nextPosition(dealer),
    dealer: dealer,
    deck: Deck.create(),
    hands: Hands.create(),
    phase: Phase.Starting,
  };
}

export function callTrump(round: Round, suit: Card.Suit, alone: boolean): Round {
  return {
    ...round,
    alone,
    called: round.current,
    current: Hands.nextPosition(round.dealer),
    phase: Phase.TrickTaking,
    trump: suit,
  };
}

export function discard(round: Round, card: Card.Type): Round {
  return {
    ...round,
    current: Hands.nextPosition(round.dealer),
    hands: Hands.removeFrom(round.hands, round.dealer, card),
  };
}

/**
 * Deal out all four hands.
 */
export function deal(round: Round): Round {
  let { current, deck, hands } = round;
  let cards: Array<Card.Type>;

  [cards, deck] = Deck.deal(deck, 5);
  hands = Hands.dealTo(hands, current, cards);

  current = Hands.nextPosition(current);
  [cards, deck] = Deck.deal(deck, 5);
  hands = Hands.dealTo(hands, current, cards);

  current = Hands.nextPosition(current);
  [cards, deck] = Deck.deal(deck, 5);
  hands = Hands.dealTo(hands, current, cards);

  current = Hands.nextPosition(current);
  [cards, deck] = Deck.deal(deck, 5);
  hands = Hands.dealTo(hands, current, cards);

  return {
    ...round,
    deck,
    hands,
    phase: Phase.PickingUp,
  };
}
