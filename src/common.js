export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export function randomSign() {
  return (randomInt(0, 1) === 0 ? -1 : 1);
}
