// Constantes para representar los símbolos de los jugadores
export const TURNS = {
  // Turnos
  X: "❌", // Símbolo para el jugador X
  O: "⚪", // Símbolo para el jugador O
};

// Combinaciones ganadoras posibles en el tablero
export const WINNER_COMBOS = [
  [0, 1, 2], // Fila superior
  [3, 4, 5], // Fila del medio
  [6, 7, 8], // Fila inferior
  [0, 3, 6], // Columna izquierda
  [1, 4, 7], // Columna del medio
  [2, 5, 8], // Columna derecha
  [0, 4, 8], // Diagonal de izquierda a derecha
  [2, 4, 6], // Diagonal de derecha a izquierda
];
