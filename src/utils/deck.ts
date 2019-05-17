import { shuffle } from 'lodash';
import * as Card from './card';

type Deck = Array<Card.Type>;

export type Type = Deck;

const ALL_CARDS = [
  Card.create('9', 'clubs'), Card.create('10', 'clubs'), Card.create('J', 'clubs'), Card.create('Q', 'clubs'), Card.create('K', 'clubs'), Card.create('A', 'clubs'),
  Card.create('9', 'diamonds'), Card.create('10', 'diamonds'), Card.create('J', 'diamonds'), Card.create('Q', 'diamonds'), Card.create('K', 'diamonds'), Card.create('A', 'diamonds'),
  Card.create('9', 'hearts'), Card.create('10', 'hearts'), Card.create('J', 'hearts'), Card.create('Q', 'hearts'), Card.create('K', 'hearts'), Card.create('A', 'hearts'),
  Card.create('9', 'spades'), Card.create('10', 'spades'), Card.create('J', 'spades'), Card.create('Q', 'spades'), Card.create('K', 'spades'), Card.create('A', 'spades'),
]

/**
 * Create a shuffled deck.
 */
export function create(): Deck {
  return shuffle(ALL_CARDS);
}

/**
 * Draw `count` number of cards from the deck, returning the drawn cards and the new (shorter) deck.
 */
export function deal(deck: Deck, count: number): [Array<Card.Type>, Deck] {
  const drawn = deck.slice(0, count);
  const rest = deck.slice(count);
  return [drawn, rest];
}
