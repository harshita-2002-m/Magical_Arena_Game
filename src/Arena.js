// Defines the Arena class, which handles the logic of a battle between two players.

const Dice = require('./models/Dice');

class Arena {
    constructor(player_A, player_B) {
        this.player_A = player_A; // First player
        this.player_B = player_B; // Second player
        this.dice = new Dice(); // Dice instance for rolling
    }

    // This is to conduct a fight between two players until one dies
    fight() {
        let attacker, defender;
        while (this.player_A.isAlive() && this.player_B.isAlive()) {
            // Here determining the attacker and defender
            if (this.player_A.health <= this.player_B.health) {
                attacker = this.player_A;
                defender = this.player_B;
            } else {
                attacker = this.player_B;
                defender = this.player_A;
            }

            // Attacker rolls the dice to determine damage
            const attackRoll = this.dice.roll();
            const attackDamage = attackRoll * attacker.attack;

            // Defender rolls the dice to determine defense
            const defenseRoll = this.dice.roll();
            const defensePower = defenseRoll * defender.strength;

            // Calculating damage dealt to defender
            const damage = Math.max(0, attackDamage - defensePower);
            defender.takeDamage(damage);

            console.log(`${attacker.name} attacks ${defender.name}:
            Attack roll: ${attackRoll} (Damage: ${attackDamage})
            Defense roll: ${defenseRoll} (Blocked: ${defensePower})
            ${defender.name} takes ${damage} damage, health is now ${defender.health}`);
        }

        // Here determining the winner
        return this.player_A.isAlive() ? this.player_A : this.player_B;
    }
}

module.exports = Arena;

