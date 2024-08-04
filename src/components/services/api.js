import axios from 'axios';

const API_URL = 'https://world.openfoodfacts.org/api/v2/search?categories_tags=fruit';

export const fetchFruits = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.products || [];
    } catch (error) {
        console.error('Error fetching fruits', error);
        throw error;
    }
};