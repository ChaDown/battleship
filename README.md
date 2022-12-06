# battleship

Battleship is a web application which focuses on two main areas, unit-testing and AI game logic.

This is the first application where I followed a TDD approach while creating the logic. It was a new way to code for me, and it took a while to get my head around it but the benefits are clear. It made my code far clearer and more concise.

Ships are randomly placed on the board, with the user able to reset the board to a layout they like before starting the game.

A click on an enemy tile triggers the gameloop.

The gameloop steps are as follows:

- Send attack to gameboard and update gameboard.
- Render updated gameboard with hit/hit ship marked.
- Check if the game is over (if all ships have been sunk).
- If a ship is hit, the loop will end and it is the players turn again. If not, AI turn.

- AI waits 500ms before making a smart move.
- AI will check if there are any ships hit, and also if there are any adjacent ship tiles hit.
- If so, it will continue attacking that ship by hitting an adjacent tile.
- If there are no adjacent tiles, it will try hit a tile beside a hit ship.
- If none of these options are available, the computer will make a random move.

The game ends with a gameover screen, giving the player the option to try again!
