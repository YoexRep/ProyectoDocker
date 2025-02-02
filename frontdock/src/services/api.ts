const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export const saludame = async (codsaludo: string) => {
  try {
    const response = await fetch(`${API_URL}/getSaludo/${codsaludo}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching saludo:", error);
    throw error;
  }
};
