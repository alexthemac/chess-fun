import './App.css';
import React from "react";
import Header from './Header';
import ChessBoard from './ChessBoard';
import TestPiece from './TestPiece';

function App() {
  return (
    <div className="App">
      <section className="header">
        <Header/>
      </section>
      <main className="chat-and-board">
        <section className="board">
          <ChessBoard/>
        </section>
        <section className="dead-pieces">
          DEAD PIECES GO HERE
        </section>
        <section className="chat"> 
          CHAT GOES HERE
        </section>
      </main>
    </div>
  );
}

export default App;
