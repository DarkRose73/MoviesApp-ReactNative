import {View, Text} from 'react-native';
import React from 'react';
// import {Movie} from '../interfaces/movieInterface';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export default function DetailsScreen({route}: Props) {
  const movie = route.params;

  console.log(movie.title);
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
}
