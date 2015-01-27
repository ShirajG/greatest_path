//_____________________________________________
//          GREATEST PATH REACT               \\
//==============================================
//
// Board should be composed of Tile components
// Tiles should have Row, Col, and Active properties.
// Active if the cell is in the greatest path.
//
// Board Component gets initialized with a 2D Array
// Maybe fill it with random numbers.
// 
var Utils = {
    clearChildren: function(parentNode) {
        while(app.firstChild){
            app.removeChild(app.firstChild)
        }
    },
    getRandomBoard: function(size){
        var newBoard = []
        size = parseInt(size)
        for(var i=0;i<size;i++){
            newBoard.push([])
            for (var j=0; j< size; j++) {
                newBoard[i].push(Math.floor(Math.random() * 300))
            }
        } 
        return newBoard
    }
}

//--------------------------------|
//        Components              |
//--------------------------------|

var Tile = React.createClass({
    render: function(){},
})
var Board = React.createClass({
   render: function(){
        return(
            <div>
              <p>This is the board</p>
              <p>{this.state.board[0].join(" ")}</p>
            </div>
        )
   },
   getInitialState: function(){
        return {
            board: Utils.getRandomBoard(25) 
        }
   }
});

React.render(
  <Board/>,
  document.getElementById('app')
)
