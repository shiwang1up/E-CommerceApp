// src/screens/TargetScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarouselScreen = ({ route }) => {
  const { img } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <Text style={styles.subtitle}>You clicked on:{img.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default CarouselScreen;
