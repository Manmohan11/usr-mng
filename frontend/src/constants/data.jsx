import axios from 'axios';

export const fetchData = async (token) => {
  try {
    const response = await axios.get('http://localhost:5000/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
