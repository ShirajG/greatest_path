//=================================
//   Greatest Path Algorithm      \\
//==================================
//
// Start at the final square
// Work backwards to top left.
// Recursively select the greater
// path.
//
//==================================
function Board(arr){
    this.board = arr
    this.cache = this.generateEmptyBoard(arr)
}
Board.prototype = { 
    getMax: function(row, col){
        if( row === 0 && col === 0){
            return this.board[row][col]
        }
        if (row === 0){
            // Mark that we went left
            return this.getMax(row, col-1) + this.board[row][col]
        }
        if (col === 0){
            // Mark that we went up
            return this.getMax(row -1, col) + this.board[row][col]
        }
        // Record the path taken.
        return this.cache[row][col] = this.board[row][col] + Math.max( 
            this.getMax(row - 1, col), this.getMax(row, col - 1) 
        )
    },
    generateEmptyBoard: function(arr) {
        var newBoard = []
        for(var i=0;i<arr.length;i++){
            newBoard.push(new Array)
            for(var j=0;j<arr[0].length;j++){
                newBoard[i][j] = null 
            }
        }
        return newBoard
    }

};
test = new Board(
    [[0,5,0,8,1,8],
     [3,6,1,3,6,3],
     [9,5,7,9,1,1],
     [8,7,9,4,8,3],
     [7,8,7,6,2,5],
     [3,4,0,5,0,4]]
)
console.log(test.cache)
console.log(test.getMax(5,5))