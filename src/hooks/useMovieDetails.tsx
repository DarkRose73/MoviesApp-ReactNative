import {useState, useEffect} from 'react';
import {MovieFull} from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface MovieDetails {
  cast: any[];
  movieFull: MovieFull;
  isLoading: boolean;
}

export default function useMovieDetails(movieId: number) {
  const [state, setState] = useState<MovieDetails>();

  const getMovieDetails = async () => {
    const resp = await movieDB.get<MovieFull>(`/${movieId}`);
    console.log(resp.data.overview);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    state,
  };
}
