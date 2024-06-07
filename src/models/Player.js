// Defines the Player class, which represents a player in the magical arena.

class Player {
    constructor(name, health, strength, attack) {
        this.name = name; // Name of the player
        this.health = health; // Health attribute of the player
        this.strength = strength; // Strength attribute of the player
        this.attack = attack; // Attack attribute of the player
    }

    // This is to check if the player is alive
    isAlive() {
        return this.health > 0;
    }

    // This is to take damage, reducing the player's health
    takeDamage(damage) {
        this.health = Math.max(0, this.health - damage);
    }
}

module.exports = Player;
