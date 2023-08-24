const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'маг', health: 0 },
  { name: 'лучник', henpalth: 0 },
];

const alive = characters.filter((item) => item.health > 0);
