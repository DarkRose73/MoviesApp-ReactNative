import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {useMovies} from '../hooks/useMovies';
import {MovieCard} from '../components/MovieCard';

export default function HomeScreen() {
  const {moviesNowPlaying, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <ActivityIndicator color={'red'} size={100} />
      </View>
    );
  }
  return (
    <View>
      <MovieCard></MovieCard>
    </View>
  );
}
