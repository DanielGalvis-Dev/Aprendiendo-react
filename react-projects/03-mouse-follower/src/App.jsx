import React, { useState, useEffect } from "react";
import "./App.css";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const ClassName = `cursor ${enabled ? "activeHandleMove" : ""}`;

  useEffect(() => {
    console.log("effect", { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("handleMove", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <>
      <div
        className={ClassName}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button
        onClick={() => {
          setEnabled(!enabled);
        }}
      >
        {enabled ? "desactivar" : "activar"} seguir puntero
      </button>
    </>
  );
};

export function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}
