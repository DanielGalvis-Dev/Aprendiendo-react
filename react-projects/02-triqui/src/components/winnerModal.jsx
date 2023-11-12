// Importar el componente Square para mostrar el símbolo del ganador
import { Square } from "./square";

// Componente WinnerModal para mostrar el resultado del juego
export function WinnerModal({ winner, resetGame }) {
  // Si no hay un ganador, no renderizar nada
  if (winner === null) return null;

  // Texto para mostrar si hay un ganador o es un empate
  const winnerText = winner === false ? "Empate" : "Ganador";

  // Renderizar el componente WinnerModal
  return (
    <section className="winner">
      <div className="text">
        {/* Mostrar el texto de ganador o empate */}
        <h2>{winnerText}</h2>

        {/* Mostrar el símbolo del ganador (si hay un ganador) */}
        <header className="win">{winner && <Square>{winner}</Square>}</header>

        {/* Botón para reiniciar el juego */}
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
