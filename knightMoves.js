function knightMoves(start, end){
    // Base case: if the start and end squares are the same
    if (start == end) {
        return [start]; 
    }

    // BFS (Breadth-First Search) algorithm to find the shortest path.
    function bfs(startSquare, endSquare){
        const queue = []; // Queue to manage squares to visit in BFS
        const visitedSquares = new Set(); // Set to keep track of visited squares
        const parentMap = new Map(); // Map to store the "parent" of each square in the path
    
        // Add the starting square to the queue to initiate BFS
        queue.push(startSquare); 
        // Mark the start square as visited (convert to a string for Set compatibility)
        visitedSquares.add(JSON.stringify(startSquare)); 
        // The "parent" of the start square is null since it is the starting point
        parentMap.set(JSON.stringify(startSquare), null);  

        // Main BFS loop
        while (queue.length > 0) {
            // Dequeue a square from the queue
            const currentSquare = queue.shift();
    
            // Check if the currentSquare is the target (end) square
            if (currentSquare[0] === endSquare[0] && currentSquare[1] === endSquare[1]) {
            // We've found the shortest path, call reconstructPath and return the result
            return reconstructPath(currentSquare, parentMap);
            } else {
            const availableMoves = getValidKnightMoves(currentSquare);
            
            availableMoves.forEach(nextMove => {
                const nextMoveStr = JSON.stringify(nextMove);
                if (!visitedSquares.has(nextMoveStr)) {
                // Mark nextMove as visited
                visitedSquares.add(nextMoveStr);
                // Set the parent of nextMove
                parentMap.set(nextMoveStr, currentSquare);
                // Enqueue nextMove
                queue.push(nextMove);
                }
            });
            }
        }
        
        console.log("Queue empty, target not found (this shouldn't happen in this problem)");
        return null;
        
        } 

    const path = bfs(start, end);

    if (path) {
        const movesCount = path.length - 1;
        console.log(`You made it in ${movesCount} moves. Here's your path:\n`);
        path.forEach(square => {
        console.log(`[${square[0]}, ${square[1]}]`);
        });
        return path;
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

function reconstructPath(targetSquare, parentMap) {
    // Array to store the reconstructed path
    const path = []; 
    // Start from the target square
    let currentSquare = targetSquare;
    // Trace back from the target to the start using "parents" in parentMap
    while (currentSquare !== null) {
      // Add the current square to the start of the array (to maintain the correct order)
      path.unshift(currentSquare); 
      // Get the "parent" of the current square from parentMap and update currentSquare
      currentSquare = parentMap.get(JSON.stringify(currentSquare));
    }
    // Return the array containing the full path
    return path;
  }

knightMoves([0, 0], [7, 7]);
knightMoves([0, 0], [3, 3]);
knightMoves([0, 0], [4, 7]);
knightMoves([0, 0], [4, 9]);
