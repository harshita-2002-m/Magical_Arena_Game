// Unit tests for the Dice class.

const assert = require('assert');
const Dice = require('../src/models/Dice');

describe('Dice', function() {
    // Test the roll method to ensure it returns a value between 1 and 6
    it('should roll a value between 1 and 6', function() {
        const dice = new Dice();
        for (let i = 0; i < 100; i++) {
            const roll = dice.roll();
            assert(roll >= 1 && roll <= 6);
        }
    });
});

