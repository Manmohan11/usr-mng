import axios from 'axios';


axios.defaults.withCredentials = true;

export const fetchData = async () => {
  try {
    console.log('Attempting to fetch data from https://usr-mng-lac.vercel.app/api/users');
    const response = await axios.get('https://usr-mng-lac.vercel.app/api/users');
    console.log('Data fetched successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);

    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      // Request was made but no response was received
      console.error('Request data:', error.request);
    } else {
      // Something else caused the error
      console.error('Error message:', error.message);
    }
    
    throw error;
  }
};
