/**
* @jsx REACT.DOM
*/

// var Utils = {
//     clearChildren: function(parentNode) {
//         while(app.firstChild){
//             app.removeChild(app.firstChild)
//         }
//     },
//     getRandomBoard: function(size){
//         var newBoard = []
//         size = parseInt(size)
//         for(var i=0;i<size;i++){
//             newBoard.push([])
//             for (var j=0; j< size; j++) {
//                 newBoard[i].push(Math.floor(Math.random() * 300))
//             }
//         } 
//         return newBoard;
//     },
//     getSize: function(){
//       var size = parseInt(prompt("Please enter the grid size"))
//       return size
//     }
// }

var Board = React.createClass({
    
   // getInitialState: function(){
   //      return {
   //          board: Utils.getRandomBoard( Utils.getSize()) 
   //      }
   // },
   render: function(){
        return(
            this.board.map(function(r,r_index){
                <Row data={r} row={r_index} />
            })
        )
   }
})



React.render(
    <Board/>,
    document.getElementById('app')
)
