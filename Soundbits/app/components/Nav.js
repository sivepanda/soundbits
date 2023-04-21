import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const StyledView = styled(View);

const NavBar = ({ activeTab }) => {
  const navigation = useNavigation();
    return (
      <StyledView tw='bg-slate-900 pt-5' style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Home', {})} style={styles.tab}>
          <Ionicons name="home-outline" size={28} color={activeTab === 'Home' ? '#000' : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search', {})} style={styles.tab}>
          <Ionicons name="search-outline" size={28} color={activeTab === 'Search' ? '#000' : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Upload', {})} style={styles.tab}>
          <Ionicons name="add-circle-outline" size={40} color={activeTab === 'Upload' ? '#000' : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Friends', {})} style={styles.tab}>
          <Ionicons name="people-outline" size={28} color={activeTab === 'Friends' ? '#000' : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Accounts', {})} style={styles.tab}>
          <Ionicons name="person-outline" size={28} color={activeTab === 'Accounts' ? '#000' : '#ccc'} />
        </TouchableOpacity>
      </StyledView>
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
    alignItems: 'left',
    justifyContent:'center',
    position: 'sticky',
    bottom: 0,
    width: '100%',
    height: 75,
    paddingBottom: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center'
  }
});

export default withExpoSnack(NavBar);