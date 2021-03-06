/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
    var board = new Board({n: n});
    for(var i = 0; i < n; i++){
      var row = board.get(i);
      row[i] = 1;
    }
    var solution = board.rows();



  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var count = 0;
  var board = new Board({n: n});

  var counter = function(rowIndex){

    if(rowIndex === n){
      count++;
      return;
    }


    var row = board.get(rowIndex);
    for(var i = 0; i < n; i++){
      row[i] = 1;
      if(!board.hasAnyRooksConflicts()){
          counter(rowIndex+1);

      }

     row[i] = 0  ;

    }

  }
  counter(0);
  console.log('Number of solutions for ' + n + ' rooks:', count);
  return count;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0 //fixme
  var board = new Board({n: n});

  var counter = function(rowIndex){

    if(rowIndex === n){
      solutionCount++;
      return;
    }


    var row = board.get(rowIndex);
    for(var i = 0; i < n; i++){
      row[i] = 1;
      //board.togglePiece(row, i);
      if(!board.hasAnyQueensConflicts()){
          counter(rowIndex+1);

      }

     row[i] = 0  ;

    }

  }
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

window.countNQueensBitwise = function(n){
  var solutionCount = 0;

  console.log('Bitwise: Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


