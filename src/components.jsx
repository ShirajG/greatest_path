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
        var parent = this
        return(
            <div className="row">
                {this.props.data.map(function(cell, index){
                    return <Cell val={cell} col={index} row={parent.props.row} key={[parent.props.row, index]} />
                })}
            </div>
        )
    }
});
var Game = React.createClass({
   getInitialState: function(){
        return {
            board: Utils.getRandomBoard( Utils.getSize()) 
        }
   },
   findPath: function(){
        var length = this.state.board.length - 1
        var res = new Board(this.state.board).getMax(length,length)
        this.setState({
            sum : res.val,
            path : res.path
        })
        console.log(res.val)
        console.log(res.path)
   },
   render: function(){
        return(
            <div className="game">
                {this.state.board.map(function(row, r_index){
                    return <Row data={row} key={r_index}/>
                })}
                <button onClick={this.findPath}>Find Path</button>
            </div>
        )
   }
})
React.render(
    <Game />,
    document.getElementById('app')
)
