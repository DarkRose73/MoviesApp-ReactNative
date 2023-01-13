import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '2b971c2deff14d2e91fb68f7cfa95568',
    language: 'en-US',
  },
});

export default movieDB;
