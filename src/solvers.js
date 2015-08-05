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
  var solution = new Board({n: n});
  var rookSetter = function(index, doNoUseArray){
    //loop through doNotUseArray
    //do the check (if index !== doNoUseArray)
    //var row = solution.get(index)


    for(var i = 0; i < n; i++){
      var row = solution.get(i);
      for(var j = 0; j < n; j++){
        row[j] = 1;
      }
    }
  }

    /*
      var rookSetter = function(arr, doNotuseIndexarr){
          //loop through the arr
          //if the index is not in the doNotUseArr
               //set the value at the position to 1
               // add used index to doNoUseArray
          //rookSetter(arr,doNotUseIndexArray)
      }


          for(var i=0; i<n; i++){
             if(_.contains(doNotUseArray, i) === -1){
                for(var j = 0; j < n; j++){
                  if(_.contains(doNotuseArray, j) === -1){
                    var row = solution.get(i);
                    row[j] = 1;
                    doNotUseArray.push(j);
                  }
                }
             }
             check if the nearest positions are ones?
             rookSetter(arr, doNotUseArray);
          }

    */


    // put the rooks in systematically
    // after the correct # of rooks are placed
    //   check the rows/columns
    //   if there are no conflicts
    //     then return the board
  }


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

window.countNQueensBitwise = function(n){
  var solutionCount = 0;

  console.log('Bitwise: Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


