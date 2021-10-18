import React, { useState } from "react";
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

 

  //Easier way to refer to the pieces in code. It's hard to read the unicode character as it's so small
  const pieces = {
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


  // const pieceMovement = {
  //   wp: [8, 16],
  //   bp: [-8, -16]
  // }

  // const testArray = [pieces.bp1.image, pieces.bp2.image, pieces.bp3.image, pieces.bp4.image, pieces.bp5.image, pieces.bp6.image, pieces.bp7.image, pieces.bp8.image,
  //   pieces.br1.image, pieces.bn1.image, pieces.bb1.image, pieces.bq1.image, pieces.bk1.image, pieces.bb2.image, pieces.bn2.image, pieces.br2.image];

  // console.log("!!!!!!", testArray);

  const initialState = [
    pieces.wr1.image, pieces.wn1.image, pieces.wb1.image, pieces.wq1.image, pieces.wk1.image, pieces.wb2.image, pieces.wn2.image, pieces.wr2.image,
    pieces.wp1.image, pieces.wp2.image, pieces.wp3.image, pieces.wp4.image, pieces.wp5.image, pieces.wp6.image, pieces.wp7.image, pieces.wp8.image,
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    pieces.bp1.image, pieces.bp2.image, pieces.bp3.image, pieces.bp4.image, pieces.bp5.image, pieces.bp6.image, pieces.bp7.image, pieces.bp8.image,
    pieces.br1.image, pieces.bn1.image, pieces.bb1.image, pieces.bq1.image, pieces.bk1.image, pieces.bb2.image, pieces.bn2.image, pieces.br2.image
  ];

  /////---------- use setBoard with FEN notation -------------/////
  const [board, setBoard] = useState(initialState);

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
        return <div key={i} id={i} className="square white potential-move" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{piece}</span></div>
      } else {
        return <div key={i} id={i} className="square black" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{piece}</span></div>
      };
    } else {
      if (i % 2 === 0 ) {
        return <div key={i} id={i} className="square black" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{piece}</span></div>
      } else {
        return <div key={i} id={i} className="square white" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{piece}</span></div>
      };
    };
  })

  return (
    <div className="chessboard">
      {chessSquares}
    </div>
  );
}


