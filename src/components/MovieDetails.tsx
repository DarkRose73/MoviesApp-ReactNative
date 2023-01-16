import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Details */}
      <View style={{marginHorizontal: 20}}>
        {/* Vote average & genres */}
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color={'grey'} size={16} />
          <Text> {movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5, flex: 1, color: 'black'}}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        {/* Overview */}
        <Text style={styles.title}>Overview</Text>
        <Text style={{color: 'black', fontSize: 16}}>{movieFull.overview}</Text>

        {/* Budget */}
        <Text style={styles.title}>Budget</Text>
        <Text style={{fontSize: 18}}>
          {Intl.NumberFormat('us-US', {
            style: 'currency',
            currency: 'USD',
          }).format(movieFull.budget)}
        </Text>
      </View>
      {/* Casting */}
    </>
  );
};

// console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'black',
  },
});
