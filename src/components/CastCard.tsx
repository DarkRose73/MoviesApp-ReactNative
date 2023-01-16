import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastCard = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{uri}} style={styles.image} />}

      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    paddingRight: 15,
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7.49,
    elevation: 10,
  },
  actorInfo: {
    marginTop: 4,
    marginLeft: 10,
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  actorCharacter: {
    fontSize: 16,
    color: 'black',
    opacity: 0.7,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
