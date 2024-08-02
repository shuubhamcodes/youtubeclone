const axios = require('axios');

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';
const API_KEY = '3939abe0aemsh45d775c4004af73p1acf72jsn36e34e4a9603'; // Your API key

const options = {
  params: {
    part: 'snippet',
    q: 'New',
    maxResults: 50,
  },
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  },
};

const fetchFromAPI = async () => {
  try {
    const response = await axios.get(BASE_URL, options);
    console.log('Full Response:', response.data); // Log the full response
  } catch (error) {
    console.error('Error fetching data from API', error);
  }
};

fetchFromAPI();
