import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Dimensions} from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const GenreItem = (props) => {


  return (
    <View style={styles.container}>
      <View style={[styles.halfContainer, styles.leftHalf]} />
      <View style={[styles.halfContainer, styles.rightHalf]} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: width * .7,
        height: width * .2,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white',
        zIndex: 2,
      },
      halfContainer: {
        flex: 1,
        alignContent: 'space-between',
      },
      leftHalf: {
        backgroundColor: 'blue',
        transform: [{ rotate: '45deg' }],
        height: 1,
        width: 1000,
        zIndex: 2,
      },
      rightHalf: {
        backgroundColor: 'green',
        transform: [{ rotate: '45deg' }],
        height: 1,
        width: 1000,
        zIndex: 2,
      },
});

export default withExpoSnack(GenreItem);