// Importar las combinaciones ganadoras desde el archivo de constantes
import { WINNER_COMBOS } from "../constans";

// Función para verificar si hay un ganador en el tablero
export const checkWinnerFrom = (boardToCheck) => {
  // Iterar sobre las combinaciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;

    // Verificar si las casillas en las posiciones de la combinación son iguales y no nulas
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      // Devolver el símbolo del ganador si la condición se cumple
      return boardToCheck[a];
    }
  }

  // Devolver nulo si no hay un ganador
  return null;
};

// Función para verificar si el juego ha llegado a su fin (empate)
export const checkEndGame = (newBoard) => {
  // Verificar si todas las casillas están llenas (no nulas)
  return newBoard.every((Square) => Square !== null);
};
