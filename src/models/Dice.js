// Defines the Dice class, representing a six-sided dice used in the game.

class Dice {
    // This is to roll the dice, returning a value between 1 and 6
    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

module.exports = Dice;
