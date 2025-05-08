import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function IngredientItem({
                                         name,
                                         imageSrc,
                                       }: {
  name: string;
  imageSrc: string;
}) {
  return (
      <View style={styles.item}>
        <View style={styles.iconWrapper}>
          <Image source={{ uri: imageSrc }} style={styles.image} />
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    margin: 8,
    width: 80,
  },
  iconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  name: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});
