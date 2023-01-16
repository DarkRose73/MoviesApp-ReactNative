import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {useMovies} from '../hooks/useMovies';
import {MovieCard} from '../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';

const {width: windowWidth} = Dimensions.get('window');

export default function HomeScreen() {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
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
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Principal Carousel */}
          <View style={{height: 440, paddingTop: 5}}>
            <Carousel
              data={nowPlaying}
              itemWidth={300}
              sliderWidth={windowWidth}
              inactiveSlideOpacity={0.9}
              renderItem={({item}) => <MovieCard movie={item}></MovieCard>}
              autoplay={true}
              autoplayInterval={7000}
              loop={true}
            />
          </View>

          {/* Trending movies */}
          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
