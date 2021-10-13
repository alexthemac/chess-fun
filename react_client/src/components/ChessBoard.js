import React from "react";
import "./ChessBoard.css";

export default function ChessBoard() {

  const chessSquares = [];

  for(let i = 0; i < 32; i++) {

    if (i < 4 || i > 7 && i < 12 || i > 15 && i < 20 || i > 23 && i < 28) {
      chessSquares.push(<div className="square white"></div>, <div className="square black"></div>)
    } else {
      chessSquares.push(<div className="square black"></div>, <div className="square white"></div>)
    }
  }

  return (
    <div className="chessboard">
      {chessSquares}
    </div>
  );
}


