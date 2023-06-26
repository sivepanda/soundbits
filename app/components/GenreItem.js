import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Dimensions} from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useNavigation } from '@react-navigation/native';

const GenreItem = (props) => {
const { width, height } = Dimensions.get('window');

  return (
    <View style={[styles.container, { borderColor: 'transparent'}]}>
      <View style={[styles.diagonalLine, { backgroundColor: props.c, left: width - 8}]} />
      <Text style={styles.title}>{props.t}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 28,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: '#fff6',
  },
  diagonalLine: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    transform: [{ rotate: '15deg' }],
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
});

export default withExpoSnack(GenreItem);