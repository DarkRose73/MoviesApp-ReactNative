import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying, Movie} from '../interfaces/movieInterface';

export const useMovies = () => {
  //
  const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    const movies = resp.data.results;
    setMoviesNowPlaying(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    // now playing
    getMovies;
  }, []);

  return {
    moviesNowPlaying,
    isLoading,
  };
};
