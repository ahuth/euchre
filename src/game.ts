import type {Card} from './cards';

export function toLeft(position: number) {
  return (position + 1) % 4;
}

export function toHandKey(position: number) {
  if (position === 0) {
    return 'hand1';
  }
  if (position === 1) {
    return 'hand2';
  }
  if (position === 2) {
    return 'hand3';
  }
  return 'hand4';
}

export function toPlayedKey(position: number) {
  if (position === 0) {
    return 'played1';
  }
  if (position === 1) {
    return 'played2';
  }
  if (position === 2) {
    return 'played3';
  }
  return 'played4';
}

export function removeCard(hand: Card[], card: Card) {
  return hand.filter((c) => c !== card);
}
