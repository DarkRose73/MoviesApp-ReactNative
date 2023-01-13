import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {useMovies} from '../hooks/useMovies';
import {MovieCard} from '../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function HomeScreen() {
  const {moviesNowPlaying, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

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
    <View style={{marginTop: top + 20}}>
      <MovieCard movie={moviesNowPlaying[0]}></MovieCard>
    </View>
  );
}
