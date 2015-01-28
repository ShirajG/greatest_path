/**
* @jsx React.DOM
*/

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
    render: function () {
        return(
            <div className="cell">{this.props.val}</div>
        )
    }
})

var Row = React.createClass({
    render: function(){
        var that = this
        return(
            <div className="boardRow">
                {this.props.data.map(function(cell, index){
                    return <Cell val={cell} col={index} row={that.props.row} key={that.props.row} />
                })}
            </div>
        )
    }
});
var Board = React.createClass({
    
   getInitialState: function(){
        return {
            board: Utils.getRandomBoard( Utils.getSize()) 
        }
   },
   render: function(){
        return(
            <div>
                {this.state.board.map(function(row, r_index){
                    return <Row data={row} key={r_index}/>
                })}
            </div>
        )
   }
})

React.render(
    <Board />,
    document.getElementById('app')
)
