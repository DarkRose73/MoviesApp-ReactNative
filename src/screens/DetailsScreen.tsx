import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

const screenHeight = Dimensions.get('screen').height;

export default function DetailsScreen({route}: Props) {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  console.log(movie.title);
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.posterImage} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,

    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7.49,
    elevation: 10,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
