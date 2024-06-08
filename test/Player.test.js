// Unit tests for the Player class.

const assert = require('assert');
const Player = require('../src/models/Player');

describe('Player', function() {
    // Test the initialization of a player
    it('should initialize correctly', function() {
        const player = new Player('Test', 100, 10, 5);
        assert.strictEqual(player.name, 'Test');
        assert.strictEqual(player.health, 100);
        assert.strictEqual(player.strength, 10);
        assert.strictEqual(player.attack, 5);
    });

    // Test the isAlive method
    it('should check if player is alive', function() {
        const player = new Player('Test', 0, 10, 5);
        assert.strictEqual(player.isAlive(), false);
    });
});

