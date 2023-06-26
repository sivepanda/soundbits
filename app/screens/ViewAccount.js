import React, { useState, useRef } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { uniqueNamesGenerator, adjectives, names, colors, animals } from 'unique-names-generator';

import { useNavigation } from '@react-navigation/native';

import Sounds from '../components/Sound'
import NavBar from '../components/Nav';
import Title from '../components/Title';

const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledView = styled(View);
const StyledTitle = styled(Title);

const config = {
    dictionaries: [names],
    style: 'capital'
}

const config_D = {
    dictionaries: [adjectives],
    style: 'capital'
}

function randNum() {
    var min = Math.floor(Math.random() * 4) + 2;
    var sec = Math.floor(Math.random() * 60);
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    return min + ":" + sec;
}


function randImg() {
  return 'https://picsum.photos/400';
}

const { width, height } = Dimensions.get('window');

const ViewAccount = () => {
  const StyledView = styled(View);
  const navigation = useNavigation();
  return (
    <StyledView style={styles.styledContainer}>
    
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePicture}
            source={{ uri: randImg() }}
          />
          {/* <View style={styles.gradientOverlay} /> */}
          <Text style={styles.username}>John Doe</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Likes: 500</Text>
            <Text style={styles.infoText}>Posts: 100</Text>
            <Text style={styles.infoText}>Friends: 300</Text>
          </View>
        </View>
        <View style={styles.topHitsContainer}>
          <Text style={styles.sectionTitle}>Top Hits</Text>
          <View style={styles.songContainer}>
            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
          </View>
          <View style={styles.songContainer}>
            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
          </View>
          <View style={styles.songContainer}>
            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
          </View>
          <View style={styles.songContainer}>
            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
          </View>
          <View style={styles.songContainer}>
            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
          </View>
        </View>
        <View style={styles.genresContainer}>
          <Text style={styles.sectionTitle}>Genres</Text>
          {/* Add your genres content here */}
        </View>
      </ScrollView>
      <StyledView style={{ marginTop: 'auto', width: '100%'}}>
        <NavBar navigation={navigation} activeTab="Home"/>
      </StyledView>

    </StyledView>
    );
};

const styles = StyleSheet.create({
  styledContainer: {
    backgroundColor: 'black',
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
  },
  profileContainer: {
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
  },
  profilePicture: {
    width: width,
    height: width,
  },
  gradientOverlay: {
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.3,
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    opacity: 0.7,
    backgroundColor: 'black',
    paddingBottom: 10,
  },
  username: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 10,
    alignSelf: 'left',
    zIndex: 2,
    position: 'absolute',
    paddingTop: width * .9,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'left',
    marginTop: 10,
    marginLeft: 10,
    zIndex: 2,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
  },
  topHitsContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  songContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#8b5cf6',
    borderRadius: 10,
    alignItems: 'center',
  },
  songText: {
    fontSize: 16,
  },
  genresContainer: {
    marginTop: 20,
  },
});

export default withExpoSnack(ViewAccount);
