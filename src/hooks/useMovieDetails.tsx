import {useState, useEffect} from 'react';
import {MovieFull} from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';

interface MovieDetails {
  cast: Cast[];
  movieFull?: MovieFull;
  isLoading: boolean;
}

export default function useMovieDetails(movieId: number) {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );

    // Multi promises are always arrays
    const [movieDetailsResponse, castPromiseResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: castPromiseResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
}
