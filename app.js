//=================================
//   Greatest Path                \\
//==================================
//
// Start at the final square
// Work backwards to top left.
function Board(arr){
    this.board = arr
}
Board.prototype = { 
    getMax: function(row, col){
        if( row === 0 && col === 0){
            return this.board[row][col]
        }
        if (row === 0){
            return this.getMax(row, col-1) + this.board[row][col]
        }
        if (col === 0){
            return this.getMax(row -1, col) + this.board[row][col]
        }
        return Math.max(
            this.getMax(row - 1, col) + this.board[row][col],
            this.getMax(row, col - 1) + this.board[row][col]
        )
    }
};
test = new Board(
    [[2,3,4,5],
     [5,6,7,5],
     [5,4,5,6],
     [6,7,8,4]]
)
console.log(test.getMax(3,3))