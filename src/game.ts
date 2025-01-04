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
