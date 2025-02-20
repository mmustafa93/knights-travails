# Knight Moves

This project implements a solution to the classic "Knight's Shortest Path" problem on a standard 8x8 chessboard using the Breadth-First Search (BFS) algorithm. The goal is to find the shortest path a knight can take to reach a target square from a given starting position.

## Table of Contents
- [Knight Moves](#knight-moves)
  - [Table of Contents](#table-of-contents)
  - [Project Description](#project-description)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Example](#example)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)

## Project Description
The `knightMoves` function calculates the shortest path for a knight to move from a starting position to an ending position on a chessboard. It uses the BFS algorithm to ensure the shortest path is found efficiently. The solution considers edge cases like out-of-bounds moves and already being at the target.

## Features
- Calculates the shortest path for a knight's move on a chessboard
- Validates moves to ensure they are within board boundaries
- Uses BFS for optimal pathfinding
- Handles edge cases gracefully

## Installation
1. Clone the repository:
```sh
git clone git@github.com:mmustafa93/knights-travails.git
```
2. Navigate to the project directory:
```sh
cd knights-travails
```
3. Run the `knightMoves` function using Node.js:
```sh
node knightMoves.js
```

## Usage
Call the `knightMoves` function with the starting and ending positions as arrays, e.g.:
```js
knightMoves([0, 0], [7, 7]);
```

## Example
```sh
You made it in 6 moves. Here's your path:
[0, 0]
[1, 2]
[2, 4]
[3, 6]
[4, 4]
[5, 6]
[7, 7]
```

## Technologies Used
- JavaScript
- Breadth-First Search (BFS) Algorithm

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).
