import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { Ionicons } from '@expo/vector-icons';

const NavBar = ({ navigation, activeTab }) => {
  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigateTo('Home')} style={styles.tab}>
          <Ionicons name="home-outline" size={28} color={activeTab === 'Home' ? '#000' : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Search')} style={styles.tab}>
          <Ionicons name="search-outline" size={28} color={activeTab === 'Search' ? '#000' : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Post')} style={styles.tab}>
          <Ionicons name="add-circle-outline" size={28} color={activeTab === 'Post' ? '#000' : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Friends')} style={styles.tab}>
          <Ionicons name="people-outline" size={28} color={activeTab === 'Friends' ? '#000' : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Accounts')} style={styles.tab}>
          <Ionicons name="person-outline" size={28} color={activeTab === 'Accounts' ? '#000' : '#ccc'} />
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 0.7,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // button: {
  //   alignItems: 'center',
  //   backgroundColor: '#DDDDDD',
  //   padding: 10,
  //   marginBottom: 10,
  //},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  tab: {
    flex: 1,
    alignItems: 'center'
  }
});

export default withExpoSnack(NavBar);