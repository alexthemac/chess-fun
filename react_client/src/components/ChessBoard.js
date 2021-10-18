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

  //Information for each piece on the board
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

  const initialBoardState = [
    initialPiecesState.wr1, initialPiecesState.wn1, initialPiecesState.wb1, initialPiecesState.wq1, initialPiecesState.wk1, initialPiecesState.wb2, initialPiecesState.wn2, initialPiecesState.wr2,
    initialPiecesState.wp1, initialPiecesState.wp2, initialPiecesState.wp3, initialPiecesState.wp4, initialPiecesState.wp5, initialPiecesState.wp6, initialPiecesState.wp7, initialPiecesState.wp8,
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    initialPiecesState.bp1, initialPiecesState.bp2, initialPiecesState.bp3, initialPiecesState.bp4, initialPiecesState.bp5, initialPiecesState.bp6, initialPiecesState.bp7, initialPiecesState.bp8,
    initialPiecesState.br1, initialPiecesState.bn1, initialPiecesState.bb1, initialPiecesState.bq1, initialPiecesState.bk1, initialPiecesState.bb2, initialPiecesState.bn2, initialPiecesState.br2
  ];

  //Update the initial position in the initialPiecesState to match initial board
  initialBoardState.forEach((element, index) => {
    if (element.id) {
      initialPiecesState[element.id].currentBoardIndex = index;
    }
  });


  /////---------- use setBoard with FEN notation -------------/////
  const [board, setBoard] = useState(initialBoardState);

  const [pieces, setPieces] = useState(initialPiecesState);

  console.log("BOARD!!!!", board);
  console.log("PIECES!!!!", pieces);


  //For updating board with piece that is grabbed and moved
  const [currentPiece, setCurrentPiece] = useState("");

  //For removing the piece from it's old square once it's dropped on new square
  const [moveSquares, setMoveSquares] = useState([]);

  const [possibleMoves, setPossibleMoves] = useState([]);

  const handleDragStart = (e) => {
    //e.target.lastChild.data gives the piece value

    //Grab the current piece and store it in currentPiece state
    setCurrentPiece(e.target.lastChild.data);

    //Get the current index of the grabbed piece
    const pieceIndex = board.indexOf(currentPiece);

    //Set the current grabbed piece potential moves to highlighted
    console.log(pieceIndex);

    // set

    
    // console.log(e.dataTransfer);
    console.log("EEEE", e);
  }

  const handleDragEnd = (e) => {
    //e.target.lastChild.data gives the piece value
    // console.log("I AM ended dragging", e.target);
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

  //Add white or black squares to the board
  let chessSquares = board.map((piece, i) => {

    //Alternate colors based on rank
    if (i < 8 || (i > 15 && i < 24) || (i > 31 && i < 40) || (i > 47 && i < 56)) {
      if (i % 2 === 0 ) {
        return <div key={i} id={i} className="square white potential-move" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{piece.image}</span></div>
      } else {
        return <div key={i} id={i} className="square black" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{piece.image}</span></div>
      };
    } else {
      if (i % 2 === 0 ) {
        return <div key={i} id={i} className="square black" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{piece.image}</span></div>
      } else {
        return <div key={i} id={i} className="square white" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{piece.image}</span></div>
      };
    };
  })

  return (
    <div className="chessboard">
      {chessSquares}
    </div>
  );
}


