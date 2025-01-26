import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const saludame = async (codsaludo: string) => {
    try {
        const response = await axios.get(`${API_URL}/getSaludo/${codsaludo}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching saludo:', error);
        throw error;
    }
};