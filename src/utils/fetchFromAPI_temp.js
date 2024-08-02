// import axios from 'axios';

// const BASE_URL ='https://youtube-v31.p.rapidapi.com/search';
// const options = {
    
//     // url: 'https://youtube-v31.p.rapidapi.com/search',
//     params: {
//       maxResults: 50,
//     },
//     headers: {
//       'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
//       'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
//     },
//   };

//   export const fetchFromAPI =async(url)=>{
//     const {data}= await axios.get(`${BASE_URL}/${url}`,options);
//     return data;
//   }

  





























// import axios from 'axios';

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

// const options = {
//   headers: {
//     'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
//     'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
//   },
// };

// export const fetchFromAPI = async (url) => {
//   console.log('Fetching from API:', url); // Log the URL being fetched
//   console.log('API Key:', process.env.REACT_APP_RAPID_API_KEY); // Log the API key for debugging
//   try {
//     const response = await axios.get(`${BASE_URL}/${url}`, options);
//     console.log('Full Response:', response); // Log the full response
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data from API', error);
//     return null;
//   }
// }



import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  },
};

export const fetchFromAPI = async (url) => {
  console.log('Fetching from API:', url); // Log the URL being fetched
  console.log('API Key:', process.env.REACT_APP_RAPID_API_KEY); // Log the API key for debugging
  try {
    const response = await axios.get(`${BASE_URL}?${url}`, options);
    console.log('Full Response:', response.data); // Log the full response
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API', error);
    return null;
  }
}
