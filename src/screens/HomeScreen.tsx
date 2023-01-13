import {View, Text, ActivityIndicator, Dimensions} from 'react-native';
import React from 'react';
import {useMovies} from '../hooks/useMovies';
import {MovieCard} from '../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

const {width: windowWidth} = Dimensions.get('window');

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
      {/* <MovieCard movie={moviesNowPlaying[0]}></MovieCard> */}
      <View style={{height: 440}}>
        <Carousel
          data={moviesNowPlaying}
          itemWidth={300}
          sliderWidth={windowWidth}
          renderItem={({item}) => <MovieCard movie={item}></MovieCard>}
        />
      </View>
    </View>
  );
}
