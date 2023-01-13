import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
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
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* Principal Carousel */}
        <View style={{height: 440}}>
          <Carousel
            data={moviesNowPlaying}
            itemWidth={300}
            sliderWidth={windowWidth}
            renderItem={({item}) => <MovieCard movie={item}></MovieCard>}
          />
        </View>

        {/* Trending movies */}
        <View style={{backgroundColor: 'red', height: 260}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            Trending movies
          </Text>
          <FlatList
            data={moviesNowPlaying}
            renderItem={({item}) => (
              <MovieCard movie={item} width={140} height={200}></MovieCard>
            )}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}
