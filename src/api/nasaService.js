import axios from 'axios';

const API_KEY = 'NzeR8YQWR8KAP2jDI30EgUEOOXdnIoXtMDvAZUYy';  
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
