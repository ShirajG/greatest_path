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
    [[0,5,0,8,1,8],
     [3,6,1,3,6,3],
     [9,5,7,9,1,1],
     [8,7,9,4,8,3],
     [7,8,7,6,2,5],
     [3,4,0,5,0,4]]
)
console.log(test.getMax(5,5))