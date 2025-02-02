"use client";

import { useState } from "react";
import { saludame } from "../services/api";

export default function Home() {
  const [saludo, setSaludo] = useState("");

  const handleSaludo = async (codsaludo: string) => {
    try {
      const response = await saludame(codsaludo);
      if (Array.isArray(response) && response.length > 0) {
        setSaludo(response[0].f_saludo);
      } else {
        setSaludo("Mensaje no encontrado");
      }
    } catch (error) {
      console.error("Error:", error);
      setSaludo("Error fetching saludo");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1
        className={`border border-black border-[5px] p-4 mb-4 text-center w-[800px] h-[500px] flex items-center justify-center text-2xl ${saludo}`}
      >
        {saludo || "Mensaje oculto"}
      </h1>
      <div className="space-x-4">
        <button
          className="bg-blue-200 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded"
          onClick={() => handleSaludo("1")}
        >
          Mostrar mensaje 1
        </button>
        <button
          className="bg-blue-200 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded"
          onClick={() => handleSaludo("2")}
        >
          Mostrar mensaje 2
        </button>
        <button
          className="bg-blue-200 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded"
          onClick={() => handleSaludo("3")}
        >
          Mostrar mensaje 3
        </button>
      </div>
    </div>
  );
}
