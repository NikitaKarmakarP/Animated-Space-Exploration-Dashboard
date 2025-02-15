import axios from 'axios';

const API_KEY = 'DEMO_KEY';  // Replace with your NASA API key
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

export const fetchNasaData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching NASA data:', error);
        return null;
    }
};
