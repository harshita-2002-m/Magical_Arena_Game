// Entry point of the application to simulate a battle in the magical arena.

const Player = require('./models/Player');
const Arena = require('./Arena');

// Creating two players with specified attributes
const player_A = new Player('Player A', 50, 5, 10);
const player_B = new Player('Player B', 100, 10, 5);

// Creating an arena and start the fight
const arena = new Arena(player_A, player_B);
const winner = arena.fight();

console.log(`The winner is ${winner.name}!`);

