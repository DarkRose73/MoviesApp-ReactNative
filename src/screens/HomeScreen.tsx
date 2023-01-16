import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {useMovies} from '../hooks/useMovies';
import {MovieCard} from '../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors';
import {getImageColors} from '../helpers/getColors';
import {GradientContext} from '../context/GradientContext';
import {useEffect} from 'react';

const {width: windowWidth} = Dimensions.get('window');

export default function HomeScreen() {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

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
              autoplayInterval={10000}
              loop={true}
              onSnapToItem={index => getPosterColors(index)}
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
