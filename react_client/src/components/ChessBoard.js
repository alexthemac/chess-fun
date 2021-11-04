import React, { useEffect, useState } from "react";
import "./ChessBoard.css";
var classNames = require('classnames');

export default function ChessBoard() {
  //WHITE PIECES
  // ♔ KING
  // ♕ QUEEN
  // ♖ ROOK
  // ♗ BISHOP
  // ♘ KNIGHT
  // ♙ PAWN

  //BLACK PIECES
  // ♚ KING
  // ♛ QUEEN
  // ♜ ROOK
  // ♝ BISHOP
  // ♞ KNIGHT
  // ♟ PAWN


  // //Relative to current position. Need to add currentBoardIndex to these. 
  // const potentialMovesObject = {
  //   k: [-1, -7, -8, -9, 1, 7, 8, 9],
  //   q: [],
  //   r: [-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, ],
  //   b: [7, 14, 21, 28, 35, 42, 49, 56, 63, 9, 18, 27, 36, 45, 54, 63],
  //   n: [],
  //   wp: [-8, -16],
  //   bp: [8, 16]
  // }

 

  //Function to set the current queens moves
  const queenMoves = (currentPosition) => {

    //Array to store all moves for the current piece
    let moves = [];

    for (let row = 1; row < 8; row++) {

      //Vertical moves
      currentPosition[0] + row < 8 && moves.push([currentPosition[0] + row, currentPosition[1]]);
      currentPosition[0] - row > -1 && moves.push([currentPosition[0] - row, currentPosition[1]]);

      //Horizontal moves (row is not a good variable name as it's used for vertical and horizontal movement...)
      currentPosition[1] + row < 8 && moves.push([currentPosition[0], currentPosition[1] + row]);
      currentPosition[1] - row > -1 && moves.push([currentPosition[0], currentPosition[1] - row]);

      for (let column = 1; column < 8; column++) {

        //Diagonals
        if (row === column) {
          //Diagonals (queen<)
          if (currentPosition[0] + row < 8 && currentPosition[1] + column < 8) {
            moves.push([currentPosition[0] + row, currentPosition[1] + column]);
          }
          if (currentPosition[0] - row > -1 && currentPosition[1] + column < 8) {
            moves.push([currentPosition[0] - row, currentPosition[1] + column]);
          }
          //Diagonals (>queen)
          if (currentPosition[0] + row < 8 && currentPosition[1] - column > -1) {
            moves.push([currentPosition[0] + row, currentPosition[1] - column]);
          }
          if (currentPosition[0] - row > -1 && currentPosition[1] - column > -1) {
            moves.push([currentPosition[0] - row, currentPosition[1] - column]);
          }
        }
      }
    }
    return moves;
  }

  //Function to set the current bishops moves
  const rookMoves = (currentPosition) => {

    //Array to store all moves for the current piece
    let moves = [];

    for (let row = 1; row < 8; row++) {
      //Vertical moves
      currentPosition[0] + row < 8 && moves.push([currentPosition[0] + row, currentPosition[1]]);
      currentPosition[0] - row > -1 && moves.push([currentPosition[0] - row, currentPosition[1]]);

      //Horizontal moves (row is not a good variable name as it's used for vertical and horizontal movement...)
      currentPosition[1] + row < 8 && moves.push([currentPosition[0], currentPosition[1] + row]);
      currentPosition[1] - row > -1 && moves.push([currentPosition[0], currentPosition[1] - row]);
    }
    return moves;
  }

  //Function to set the current bishops moves
  const bishopMoves = (currentPosition) => {

    //Array to store all moves for the current piece
    let moves = [];

    //REFACTOR TO USE ONLY ONE FOR LOOP
    for (let row = 1; row < 8; row++) {
      for (let column = 1; column < 8; column++) {
        //Diagonals
        if (row === column) {
          //Diagonals (bishop<)
          if (currentPosition[0] + row < 8 && currentPosition[1] + column < 8) {
            moves.push([currentPosition[0] + row, currentPosition[1] + column]);
          }
          if (currentPosition[0] - row > -1 && currentPosition[1] + column < 8) {
            moves.push([currentPosition[0] - row, currentPosition[1] + column]);
          }
          //Diagonals (>bishop)
          if (currentPosition[0] + row < 8 && currentPosition[1] - column > -1) {
            moves.push([currentPosition[0] + row, currentPosition[1] - column]);
          }
          if (currentPosition[0] - row > -1 && currentPosition[1] - column > -1) {
            moves.push([currentPosition[0] - row, currentPosition[1] - column]);
          }
        }
      }
    }
    return moves;
  }

  //REFACTOR THIS...Too long for how simple it is
  const kingMoves = (currentPosition) => {

    let moves = []; 

    //Vertical moves
    currentPosition[0] + 1 < 8 && moves.push([currentPosition[0] + 1, currentPosition[1]]);
    currentPosition[0] - 1 > -1 && moves.push([currentPosition[0] - 1, currentPosition[1]]);

    //Horizontal moves (row is not a good variable name as it's used for vertical and horizontal movement...)
    currentPosition[1] + 1 < 8 && moves.push([currentPosition[0], currentPosition[1] + 1]);
    currentPosition[1] - 1 > -1 && moves.push([currentPosition[0], currentPosition[1] - 1]);

    //Diagonals (king<)
    if (currentPosition[0] + 1 < 8 && currentPosition[1] + 1 < 8) {
      moves.push([currentPosition[0] + 1, currentPosition[1] + 1]);
    }
    if (currentPosition[0] - 1 > -1 && currentPosition[1] + 1 < 8) {
      moves.push([currentPosition[0] - 1, currentPosition[1] + 1]);
    }
    //Diagonals (>king)
    if (currentPosition[0] + 1 < 8 && currentPosition[1] - 1 > -1) {
      moves.push([currentPosition[0] + 1, currentPosition[1] - 1]);
    }
    if (currentPosition[0] - 1 > -1 && currentPosition[1] - 1 > -1) {
      moves.push([currentPosition[0] - 1, currentPosition[1] - 1])
    }
    return moves;
  }

  const pawnMoves = (currentPosition, color) => {

    let moves = [];

    currentPosition[0] + 1 < 8 && moves.push([currentPosition[0] + 1, currentPosition[1]]);



    


    return moves;

  }





   //Function called for whichever piece type it is
  const potentialMovesObject = {
    k: kingMoves,
    q: queenMoves,
    r: rookMoves,
    b: bishopMoves,
    n: queenMoves,
    wp: pawnMoves,
    bp: pawnMoves
  }

  //Information for each piece on the board (currentBoardIndex and potentialMoves updated below)
  const initialPiecesState = {
    wk1: {id: "wk1", image: "♔", currentBoardIndex: 0, potentialMoves: []}, 
    wq1: {id: "wq1", image: "♕", currentBoardIndex: 0, potentialMoves: []}, 
    wr1: {id: "wr1", image: "♖", currentBoardIndex: 0, potentialMoves: []}, 
    wr2: {id: "wr2", image: "♖", currentBoardIndex: 0, potentialMoves: []}, 
    wb1: {id: "wb1", image: "♗", currentBoardIndex: 0, potentialMoves: []}, 
    wb2: {id: "wb2", image: "♗", currentBoardIndex: 0, potentialMoves: []}, 
    wn1: {id: "wn1", image: "♘", currentBoardIndex: 0, potentialMoves: []}, 
    wn2: {id: "wn2", image: "♘", currentBoardIndex: 0, potentialMoves: []}, 
    wp1: {id: "wp1", image: "♙", currentBoardIndex: 0, potentialMoves: []}, 
    wp2: {id: "wp2", image: "♙", currentBoardIndex: 0, potentialMoves: []}, 
    wp3: {id: "wp3", image: "♙", currentBoardIndex: 0, potentialMoves: []}, 
    wp4: {id: "wp4", image: "♙", currentBoardIndex: 0, potentialMoves: []}, 
    wp5: {id: "wp5", image: "♙", currentBoardIndex: 0, potentialMoves: []}, 
    wp6: {id: "wp6", image: "♙", currentBoardIndex: 0, potentialMoves: []}, 
    wp7: {id: "wp7", image: "♙", currentBoardIndex: 0, potentialMoves: []}, 
    wp8: {id: "wp8", image: "♙", currentBoardIndex: 0, potentialMoves: []}, 
    bk1: {id: "bk1", image: "♚", currentBoardIndex: 0, potentialMoves: []}, 
    bq1: {id: "bq1", image: "♛", currentBoardIndex: 0, potentialMoves: []}, 
    br1: {id: "br1", image: "♜", currentBoardIndex: 0, potentialMoves: []}, 
    br2: {id: "br2", image: "♜", currentBoardIndex: 0, potentialMoves: []}, 
    bb1: {id: "bb1", image: "♝", currentBoardIndex: 0, potentialMoves: []}, 
    bb2: {id: "bb2", image: "♝", currentBoardIndex: 0, potentialMoves: []}, 
    bn1: {id: "bn1", image: "♞", currentBoardIndex: 0, potentialMoves: []}, 
    bn2: {id: "bn2", image: "♞", currentBoardIndex: 0, potentialMoves: []}, 
    bp1: {id: "bp1", image: "♟", currentBoardIndex: 0, potentialMoves: []}, 
    bp2: {id: "bp2", image: "♟", currentBoardIndex: 0, potentialMoves: []}, 
    bp3: {id: "bp3", image: "♟", currentBoardIndex: 0, potentialMoves: []}, 
    bp4: {id: "bp4", image: "♟", currentBoardIndex: 0, potentialMoves: []}, 
    bp5: {id: "bp5", image: "♟", currentBoardIndex: 0, potentialMoves: []}, 
    bp6: {id: "bp6", image: "♟", currentBoardIndex: 0, potentialMoves: []}, 
    bp7: {id: "bp7", image: "♟", currentBoardIndex: 0, potentialMoves: []}, 
    bp8: {id: "bp8", image: "♟", currentBoardIndex: 0, potentialMoves: []}
  };

  // const initialBoardState = [
  //   initialPiecesState.br1, initialPiecesState.bn1, initialPiecesState.bb1, initialPiecesState.bq1, initialPiecesState.bk1, initialPiecesState.bb2, initialPiecesState.bn2, initialPiecesState.br2,
  //   initialPiecesState.bp1, initialPiecesState.bp2, initialPiecesState.bp3, initialPiecesState.bp4, initialPiecesState.bp5, initialPiecesState.bp6, initialPiecesState.bp7, initialPiecesState.bp8,
  //   "","","","","","","","",
  //   "","","","","","","","",
  //   "","","","","","","","",
  //   "","","","","","","","",
  //   initialPiecesState.wp1, initialPiecesState.wp2, initialPiecesState.wp3, initialPiecesState.wp4, initialPiecesState.wp5, initialPiecesState.wp6, initialPiecesState.wp7, initialPiecesState.wp8,
  //   initialPiecesState.wr1, initialPiecesState.wn1, initialPiecesState.wb1, initialPiecesState.wq1, initialPiecesState.wk1, initialPiecesState.wb2, initialPiecesState.wn2, initialPiecesState.wr2
  // ];

  const initialBoardState = [
    [initialPiecesState.br1, initialPiecesState.bn1, initialPiecesState.bb1, initialPiecesState.bq1, initialPiecesState.bk1, initialPiecesState.bb2, initialPiecesState.bn2, initialPiecesState.br2],
    [initialPiecesState.bp1, initialPiecesState.bp2, initialPiecesState.bp3, initialPiecesState.bp4, initialPiecesState.bp5, initialPiecesState.bp6, initialPiecesState.bp7, initialPiecesState.bp8],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    [initialPiecesState.wp1, initialPiecesState.wp2, initialPiecesState.wp3, initialPiecesState.wp4, initialPiecesState.wp5, initialPiecesState.wp6, initialPiecesState.wp7, initialPiecesState.wp8],
    [initialPiecesState.wr1, initialPiecesState.wn1, initialPiecesState.wb1, initialPiecesState.wq1, initialPiecesState.wk1, initialPiecesState.wb2, initialPiecesState.wn2, initialPiecesState.wr2]
  ];




  // //Update the initial position in the initialPiecesState to match initial board layout
  // //Also update the potential moves for each piece
  // initialBoardState.forEach((element, index) => {
  //   if (element.id) {

  //     //Set the currentBoardIndex for that piece
  //     initialPiecesState[element.id].currentBoardIndex = index;


  //     //Rest of code in if statement to set the potential moves array for that piece
  //     let pieceType = "";

  //     //Grab the first letter of all pieces except pawns (pawns have specific moves depending on color)
  //     if(element.id[1] !== 'p') {
  //       pieceType = element.id.slice(1,2);
  //     } else {
  //       pieceType = element.id.slice(0,2);
  //     };

  //     //Get the potential moves (offset from current index) for that piece type
  //     const currentPieceTypeMoves = [...potentialMovesObject[pieceType]];

  //     //Add the current pieces index to the potential moves
  //     currentPieceTypeMoves.forEach( (element2, index) => {
    
  //       //Only add moves that are < 64 (64 squares on the board)
  //       if ((element2 + element.currentBoardIndex >= 0) && (element2 + element.currentBoardIndex < 64)) {
  //         currentPieceTypeMoves[index] = element2 + element.currentBoardIndex;
  //         element.potentialMoves.push(currentPieceTypeMoves[index])
  //       }
  //     })
  //   }
  // });

  //Update the initial position in the initialPiecesState to match initial board layout
  //Also update the potential moves for each piece
  initialBoardState.forEach((row, rowIndex) => {

    row.forEach((element, elementIndex) => {
      if (element.id) {
        
        //Set the currentBoardIndex for that piece (row, column)
        initialPiecesState[element.id].currentBoardIndex = [rowIndex, elementIndex];

        //Rest of code in if statement to set the potential moves array for that piece
        let pieceType = "";

        //Grab the first letter of all pieces except pawns (pawns have specific moves (can only move forward) depending on color)
        if(element.id[1] !== 'p') {
          pieceType = element.id.slice(1,2);
        } else {
          pieceType = element.id.slice(0,2);
        };

        // console.log("PIECE TYPE!!!", pieceType);

        //Set the potential moves for that piece based on piece type
        initialPiecesState[element.id].potentialMoves = potentialMovesObject[pieceType](initialPiecesState[element.id].currentBoardIndex);


        // element.potentialMoves.push(currentPieceTypeMoves[index])



        // //Get the potential moves (offset from current index) for that piece type
        // const currentPieceTypeMoves = [...potentialMovesObject[pieceType]];

        // //Add the current pieces index to the potential moves
        // currentPieceTypeMoves.forEach( (element2, index) => {
      
        //   //Only add moves that are < 64 (64 squares on the board)
        //   if ((element2 + element.currentBoardIndex >= 0) && (element2 + element.currentBoardIndex < 64)) {
        //     currentPieceTypeMoves[index] = element2 + element.currentBoardIndex;
        //     element.potentialMoves.push(currentPieceTypeMoves[index])
        //   }
        // })
      }
    })
  });

  console.log("initialPiecesState, post update......",initialPiecesState);

  /////---------- use setBoard with FEN notation -------------/////
  const [board, setBoard] = useState(initialBoardState);

  const [pieces, setPieces] = useState(initialPiecesState);

  //For updating board with piece that is grabbed and moved
  const [currentPiece, setCurrentPiece] = useState("");

  //For removing the piece from it's old square once it's dropped on new square
  const [moveSquares, setMoveSquares] = useState([]);

  const [possibleMoves, setPossibleMoves] = useState([]);

  let possibleMoveArray = [];

  const handleDragStart = (e) => {
    //e.target.lastChild.data gives the piece value

    //Grab the current piece and store it in currentPiece state
    setCurrentPiece(pieces[e.target.id]);

    //If id is in move array, set color to gold.

    console.log("!!!!POTENTIAL MOEVS!!!!!", pieces[e.target.id].potentialMoves);
    
    possibleMoveArray = pieces[e.target.id].potentialMoves;

    possibleMoveArray.forEach(element => {
      document.getElementById(element).classList.add('colored');
    })
  }

  const handleDragEnd = (e) => {
    //e.target.lastChild.data gives the piece value
    // console.log("I AM ended dragging", e.target);

    //To remove the colored squares after piece is dropped
    const coloredSquaresArray = document.getElementsByClassName("colored")

    //Array.from required to be able to modify the elements of an HTMLCollection (undefined error if not used)
    Array.from(coloredSquaresArray).forEach((element) => {
        element.classList.remove("colored");
    });

  }

  const handleDragEnter = (e) => {
    // e.stopPropagation();
    // e.preventDefault();

    //Create an array that stores all the squares that have been hovered over by the piece
    const newMoveSquares = [...moveSquares]
    newMoveSquares.push(e.target.id);
    setMoveSquares(newMoveSquares);

  }

  //Required for handleDrop to function correctly
  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

  //Returns the div square for where the piece was dropped
  const handleDrop = (e) => {

    e.stopPropagation();
    e.preventDefault();

    //Grab index of square that the piece is dropped on
    const squareIndex = e.target.id;

    //Spread current board state
    let newStateArray = [...board];

    //Update board state with location of new piece
    newStateArray[squareIndex] = currentPiece;
    newStateArray[moveSquares[1]] = "";
    setBoard(newStateArray);

    //Reset the move array state after board has been updated
    setMoveSquares([]);

    

  }

  // let inMoveArray = true;

  // //Colors squares to show they are legal moves. Will color squares if they are in move array
  // let squareWhite = classNames( 'square white', { 'colored' : inMoveArray });
  // let squareBlack = classNames( 'square black', { 'colored' : inMoveArray });



  // //Add white or black squares to the board
  // let chessSquares = board.map((piece, i) => {

  //   //Alternate colors based on rank
  //   if (i < 8 || (i > 15 && i < 24) || (i > 31 && i < 40) || (i > 47 && i < 56)) {
  //     if (i % 2 === 0 ) {
  //       return <div key={i} id={i} className='square white' onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" id={piece.id} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{piece.image}</span></div>
  //     } else {
  //       return <div key={i} id={i} className='square black' onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" id={piece.id} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{piece.image}</span></div>
  //     };
  //   } else {
  //     if (i % 2 === 0 ) {
  //       return <div key={i} id={i} className='square black' onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" id={piece.id} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{piece.image}</span></div>
  //     } else {
  //       return <div key={i} id={i} className='square white' onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" id={piece.id} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{piece.image}</span></div>
  //     };
  //   };
  // })

  let displayedBoard = [];

  //Turn info in board array of arrays into divs to display in the DOM
  board.forEach((row, j) => {

    let displayedRow = row.map((square, i) => {

      //Alternate square colors based on rank
      if (j % 2 === 0) {        
        if (i % 2 === 0 ) {
          return <div key={[j, i]} id={[j, i]} className='square white' onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" id={square.id} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{square.image}</span></div>
        } else {
          return <div key={[j, i]} id={[j, i]} className='square black' onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" id={square.id} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{square.image}</span></div>
        };
      } else {
        if (i % 2 === 0 ) {
          return <div key={[j, i]} id={[j, i]} className='square black' onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" id={square.id} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{square.image}</span></div>
        } else {
          return <div key={[j, i]} id={[j, i]} className='square white' onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" id={square.id} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{square.image}</span></div>
        };
      }
    });

    displayedBoard.push(displayedRow);
  })

  console.log("CHESS SQUARES!!!", displayedBoard);

  return (
    <div className="chessboard">
      {displayedBoard}
    </div>
  );
}


