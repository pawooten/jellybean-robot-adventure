### Game Overview

#### Summary

- The player controls the main character, a robot in search of jellybeans.
- The game field is a grid, each cell of the grid may be occupied by:
    - The robot
    - An immovable obstacle such as a boulder
    - A movable object such as a crate which can be used to press a switch or block projectiles
    - A destroyable obstacle such as overgrowth
    - A treasure container such as a treasure chest
    - A stationary enemy
    - A mobile enemy
    - A pit
- Game field cells may also be unoccupied.
- Tools (items which are not retained after each level is completed)
    - Bomb. Bombs explode in straight directions for six cells in each direction unless an obstacle shields cells from the blast.
        - If the player is equiped with the bomb detonator power up, the bomb is detonated by a player button pressed.
        - If the player is not equiped with the bomb detonator power up, the bomb is detonated after a count down of six seconds.
        - If a bomb blast collides with an immovable obstacle, the remaining cells are shielded and the obstacle survives.
        - If a bomb blast collides with a movable object, the remaining cells are shielded but the obstacle is destroyed.
        - If a bomb blast collides with an destroyable obstacle, an enemy or the player, the remaining cells are not shielded and the obstacle is destroyed.
            - If a bomb blast collides with the player the player dies and the level is restarted unless the player is shielded from the blast with a powerup.
    - Bush Knife
        - Destroys destroyable obstacles.
    - Laser Battery. A laser beam weapon which is used to shoot switches or enemies at a distance if line of sight is not obstructed, such as across a gap.
        - The laser beam battery allows up to three shots.
    - XL Laser Battery. A larger capacity laser beam battery. five shots.
- Power Ups (items which are retained after each level is completed but are not retained after death)
    - Shield. The shield protects the player from one injury which would otherwise result in death.
    - Bomb Detonator. The bomb detonator allows the player to control the time of detonation of bombs which they've placed.
    - Bomb Scope. The bomb scope indicates the blast radius and detonation countdown timer of bombs in the playing field.
    - Treads. Increases the robot movement speed.

#### Game Mechanics

- Player progress should auto save.
- Players may replay previous levels at any time.
- No lives, continues or game over system. Players may attempt each level as many times as desired.
- The player and all enemies are unable to jump. Both pits and immovable obstacles block player and enemy movement, but pits allow projectiles to traverse while immovable obstacles do not.

#### Questions / Ideas

- Should there be a score?
- Should items like the bush knife be single use, several use, or infinite use?