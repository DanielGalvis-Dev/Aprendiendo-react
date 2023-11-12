// Importar las dependencias y componentes necesarios
import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/square.jsx";
import { TURNS } from "./constans.js";
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";
import { WinnerModal } from "./components/winnerModal.jsx";
import "./App.css";

// Componente principal de la aplicación
export function App() {
  // Estado para el tablero de juego
  const [board, setBoard] = useState(() => {
    // Obtener el estado del tablero desde el almacenamiento local o inicializar uno nuevo
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });

  // Estado para el turno actual
  const [turn, setTurn] = useState(() => {
    // Obtener el estado del turno desde el almacenamiento local o establecerlo por defecto (X)
    const turnFromStorage = window.localStorage.getItem("turn");
    // Si turnFromStorage es nulo, asigna el valor predeterminado TURNS.X, de lo contrario, usa su propio valor.
    return turnFromStorage ?? TURNS.X;
  });

  // Estado para el ganador del juego
  const [winner, setWinner] = useState(null);

  // Función para reiniciar el juego
  const resetGame = () => {
    // Reiniciar los estados del tablero, turno y ganador
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    // Eliminar los datos del tablero y turno del almacenamiento local
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  // Función para actualizar el tablero de juego según el índice seleccionado
  const updateBoard = (index) => {
    // Si el cuadro seleccionado ya está lleno o hay un ganador, no hacer nada
    if (board[index] || winner) return;

    // Actualizar el tablero con el símbolo del jugador actual
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guardar el tablero y el turno actualizados en el almacenamiento local
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    // Verificar si hay un ganador y actualizar el estado de ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      // Si hay un ganador, activar los confetis y establecer el estado de ganador
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      // Si el juego termina en empate, establecer el estado de ganador como falso
      setWinner(false);
    }
  };

  // Renderizar el componente principal
  return (
    <main className="board">
      <h1>Triqui</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        {board.map((_, index) => {
          // Renderizar cada componente de cuadro con su índice y función de actualización
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        {/* Mostrar el turno actual */}
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {/* Mostrar el modal del ganador */}
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}
