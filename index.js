function knightMoves(start, end){
    // Base case: if the start and end squares are the same
    if (start == end) {
        return [start]; 
    }

}

function getValidKnightMoves(square) {
    // square is an array [x, y]
    // Initialize an empty array to save the valid moves of the  Knight
    let validMoves = [];
  
    // Define the 8 possible moves of the knight as pairs of changes [dx, dy]
    const possibleMoves = [
      [2, 1], [2, -1], 
      [-2, 1], [-2, -1],
      [1, 2], [1, -2],
      [-1, 2], [-1, -2]
    ];
  
    // Get the x and y cordinates of the starting square
    let current_x = square[0];
    let current_y = square[1];
  
    // For each possible move in the possibleMoves list:
    possibleMoves.forEach(move => {
      // Obtener dx y dy del 'move'actual
      let dx = move[0]; // The first element of 'move'is the move change in x
      let dy = move[1]; // The second element of 'move'is the move change in y
  
      // Calculate new cordinates
      let new_x = current_x + dx;
      let new_y = current_y + dy;
  
      // Check if the new square is within the board bounderies (with function isValidSquare)
      if (isValidSquare(new_x, new_y)) {
        let newSquare = [new_x, new_y];
        // Add the new square to validMoves list
        validMoves.push(newSquare);
      }
    });

    return validMoves;

}

function isValidSquare(x, y) {
if (x >= 0 && x <= 7 && y >= 0 && y <= 7 ) {
    return true;
}else {
    return false;
}
}