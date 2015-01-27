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
        return newBoard;
    },
    getSize: function(){
      var size = parseInt(prompt("Please enter the grid size"))
      return size
    }
}

//---------------------------------
//        Components              ||
//---------------------------------
var Cell = React.createClass({
    render: function(){
        var classes = "cell "+ this.props.row + " " + this.props.col + " " + this.props.position
        if(this.props.active === "true"){
            classes += " active"
        }
        return(
            <div className={classes}>{this.props.value}</div>
        )
    },
})
var Board = React.createClass({
   getInitialState: function(){
        return {
            board: Utils.getRandomBoard( Utils.getSize()) 
        }
   },
   render: function(){
    var cells = this.state.board.map(function(row, row_index){
        return row.map(function(cell,cell_index){
            if(cell_index === row.length - 1){
                return <Cell value={cell} position="end" row={row_index} col={cell_index} active="false"/>
            } else {
                return <Cell value={cell} position="" row={row_index} col={cell_index} active="false"/>
            }
        })

    })
        return(
            <div>
              <p>This is the board</p>
              {cells}
            </div>
        )
   }
});
React.render(
    <Board/>,
    document.getElementById('app')
)
