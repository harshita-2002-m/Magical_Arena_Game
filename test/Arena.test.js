// Unit tests for the Arena class.

const assert = require('assert');
const Player = require('../src/models/Player');
const Arena = require('../src/Arena');

describe('Arena', function() {
    // Test the fight method to ensure it declares a winner
    it('should declare a winner', function() {
        const player_A = new Player('Player A', 50, 5, 10);
        const player_B = new Player('Player B', 100, 10, 5);
        const arena = new Arena(player_A, player_B);
        const winner = arena.fight();
        assert(winner.isAlive());
    });
});
