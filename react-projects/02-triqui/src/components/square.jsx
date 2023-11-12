// Componente Square que representa un cuadro en el tablero del juego
export const Square = ({ children, isSelected, updateBoard, index }) => {
  // Clase de estilo condicional para resaltar el cuadro seleccionado
  const className = `square ${isSelected ? "is-selected" : ""}`;

  // Manejador de clic para actualizar el tablero al hacer clic en el cuadro
  const handleClick = () => {
    updateBoard(index);
  };

  // Renderizar el cuadro con la clase de estilo condicional y el contenido (símbolo del jugador)
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
