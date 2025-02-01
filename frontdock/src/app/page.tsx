"use client";

import { saludame } from "../services/api";

export default function Home() {
  const handleSaludo = async (codsaludo: string) => {
    try {
      const saludo = await saludame(codsaludo);
      if (Array.isArray(saludo) && saludo.length > 0) {
        alert(saludo[0].f_saludo);
      } else {
        alert("No saludo found");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Saludos ahora con worflows:</h1>

      <button onClick={() => handleSaludo("1")}>Saludame con 1</button>
      <button onClick={() => handleSaludo("2")}>Saludame con 2 </button>
      <button onClick={() => handleSaludo("3")}>Saludame con 3 </button>
    </div>
  );
}
