import React, { useState } from "react";
import "./ChessBoard.css";

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
    wk: "♔",
    wq: "♕",
    wr: "♖",
    wb: "♗",
    wn: "♘",
    wp: "♙",
    bk: "♚",
    bq: "♛",
    br: "♜",
    bb: "♝",
    bn: "♞",
    bp: "♟"
  };

  const pieceMovement = {
    wp: [8, 16],
    bp: [-8, -16]
  }

  const initialState = [
    pieces.wr, pieces.wn, pieces.wb, pieces.wq, pieces.wk, pieces.wb, pieces.wn, pieces.wr,
    pieces.wp, pieces.wp, pieces.wp, pieces.wp, pieces.wp, pieces.wp, pieces.wp, pieces.wp,
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    pieces.bp, pieces.bp, pieces.bp, pieces.bp, pieces.bp, pieces.bp, pieces.bp, pieces.bp,
    pieces.br, pieces.bn, pieces.bb, pieces.bq, pieces.bk, pieces.bb, pieces.bn, pieces.br
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
        return <div key={i} id={i} className="square white" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}><span className="piece" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>{piece}</span></div>
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


