import { useState } from "react";
import "./App.css";

const TURNS = {
  X: "X",
  O: "O",
};

const Square = ({ children, updateBoard, index }) => {
  return <div className="square">{children}</div>;
};

export function App() {
  // const [board, setBoard] = useState(Array(9).fill(null));
  const [board, setBoard] = useState([
    'X', 'X', 'O',
    'O', 'O', 'X',
    'X', 'O', 'X'
  ]);
  console.log(board);
  return (
    <main className="board">
      <h1>Triqui</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index}>
              {board[index]}
            </Square>
          );
        })}
      </section>
    </main>
  );
}
