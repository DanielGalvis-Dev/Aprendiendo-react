// Importar React y ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Importar el componente principal de la aplicación
import { App } from "./App";

// Importar el archivo de estilos principal
import "./index.css";

// Crear un nodo raíz para renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizar el componente principal (App) en el nodo raíz
root.render(
    <App />
);
