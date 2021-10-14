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

  const [board, setBoard] = useState(initialState);

  //Add white or black squares to the board
  let chessSquares = board.map((piece, i) => {

    //Alternate colors based on rank
    if (i < 8 || (i > 15 && i < 24) || (i > 31 && i < 40) || (i > 47 && i < 56)) {
      if (i % 2 === 0 ) {
        return <div className="square white">{piece}</div>
      } else {
        return <div className="square black">{piece}</div>
      };
    } else {
      if (i % 2 === 0 ) {
        return <div className="square black">{piece}</div>
      } else {
        return <div className="square white">{piece}</div>
      };
    };
  })

  return (
    <div className="chessboard">
      {chessSquares}
    </div>
  );
}


