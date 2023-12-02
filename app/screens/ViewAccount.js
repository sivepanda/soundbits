import React, { useState, useRef } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { uniqueNamesGenerator, adjectives, names, colors, animals } from 'unique-names-generator';

import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';
import GenreItem from '../components/GenreItem';
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
    min = min < 10 ? "" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    return min + ":" + sec;
}

function title() {
  return 'Rock';
}
function color() {
  return 'red'
}

function randImg() {
  return 'https://picsum.photos/400';
}

const { width, height } = Dimensions.get('window');

const ViewAccount = () => {
  
  const [isFriended, setIsFriended] = useState(false);

  const handleFriended = () => {
      if(isFriended){
        setIsFriended(false)
      } else {
        setIsFriended(true)
      }
  };

  const StyledView = styled(View);
  
  // const user = await AsyncStorage.getItem('user-id')

  async function getUsrInfo(attribute) { 
    const userID = await AsyncStorage.getItem('user-id');
    console.log('yo')
    Axios.get('http://ec2-18-212-20-211.compute-1.amazonaws.com:3000/' + userID + '/getId/' + attribute).then(async (response) =>{
      console.log(response.attribute)
      return response.attribute;
    });
  }

  const navigation = useNavigation();
  return (
    <StyledView style={styles.styledContainer}>
    
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}> 
          <Image
           style={styles.profilePicture}
           source={{ uri: randImg() }}
          />
          <LinearGradient colors={['transparent', '#000000']} style={styles.linearGradient} />
          {/* <View style={styles.gradientOverlay} /> */}
          <Text style={styles.username}>John Doe</Text>
          <LinearGradient colors={['#6838C7', '#384FC7']} style={styles.buttonLinearGradient} />
          <TouchableOpacity onPress={handleFriended} style={styles.button}>
            <Ionicons name={isFriended ? 'person-remove-outline' : 'person-add-outline'} size={28} color='white' />
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            {/* {getUsrInfo(numLikes)} */}
            <Text style={styles.infoText}>Likes: 500 </Text>
            <Text style={styles.infoText}>Posts: 100 </Text>
            <Text style={styles.infoText}>Friends: 300</Text>
          </View>

        </View>

        <View style={styles.topHitsContainer}>
          <Text style={styles.sectionTitle}>Top Sounds</Text>
          <View style={styles.songContainer}>
            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>

            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>

            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>

            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>

            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
          </View>
        </View>
        {/* <View style={styles.genresContainer}>
          <Text style={styles.sectionTitle}>Genres</Text>
            <GenreItem c={ color() } t={ title() } w={ width } />
            <GenreItem c={ color() } t={ title() } w={ width } />
            <GenreItem c={ color() } t={ title() } w={ width } />
        </View> */}
      </ScrollView>
      <StyledView style={{ marginTop: 'auto' /*, width: '100%'*/}}>
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
  linearGradient: {
    width: width,
    height: width,
    position: 'absolute',
  },
  buttonLinearGradient: {
    width: width * .15,
    height: width * .15,
    borderRadius: '15%',
    alignSelf: 'flex-end',
    right: 20,
    transform: [{ rotate: '90deg' }],
    position: 'absolute',
    top: '87%',
  },
  button: {
    position: 'absolute',
    width: width * .15,
    height: width * .15,
    borderRadius: '15%',
    alignSelf: 'flex-end',
    right: width * .0075,
    top: '91%',
    zIndex: 1,
  },
  username: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 10,
    alignSelf: 'baseline',
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
    paddingVertical: 0,
    marginVertical: 0,
    borderRadius: 10,
    borderWidth: 15,
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
