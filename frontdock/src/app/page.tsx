'use client';

import { saludame } from '../services/api';

export default function Home() {
  const handleSaludo = async () => {
    try {
      const saludo = await saludame();
      alert(saludo);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Hola Mundo 1</h1>
      <button onClick={handleSaludo}>Saludame hola </button>
    </div>
  );
} 