import React, { useState, useRef } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import NavBar from '../components/Nav';
import Sound from '../components/Sound'



const ViewAccount = () => {
  const { width, height } = Dimensions.get('window');

  function randImg() {
    return 'https://picsum.photos/400';
  }
  const StyledView = styled(View);
  
  return (
    <styledView>
    
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePicture}
            source={require('..\app\assets\icon.png')}
          />
          <View style={styles.gradientOverlay} />
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

    </styledView>
    );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: height * 0.3,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  profilePicture: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: (width * 0.4) / 2,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.3,
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
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    zIndex: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
  },
  songContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  songText: {
    fontSize: 16,
  },
  genresContainer: {
    marginTop: 20,
  },
});

export default withExpoSnack(ViewAccount);
