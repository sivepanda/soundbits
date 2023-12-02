import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { uniqueNamesGenerator, adjectives, names} from 'unique-names-generator';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';
import NavBar from '../components/Nav'; 
import Sounds from '../components/Sound';
import { LinearGradient } from 'expo-linear-gradient';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';
import * as SecureStore from 'expo-secure-store';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StyledView = styled(View);

const config = {
  dictionaries: [names],
  style: 'capital'
}

const config_D = {
  dictionaries: [adjectives],
  style: 'capital'
}

const randomLikes = Math.floor(Math.random() * 10000);
const randomFriends = 554;
const randomPosts = Math.floor((Math.random() * 100)+5);

function randNum() {
  var min = Math.floor(Math.random() * 4) + 2;
  var sec = Math.floor(Math.random() * 60);
  min = min < 10 ? "" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  return min + ":" + sec;
}

/* ------------------------ Shows active user account ----------------------- */
const { width, height } = Dimensions.get('window');

const Accounts = () => {
  

  
  function randImg() {
    return 'https://picsum.photos/400';
  }

  const handleProfileChange = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access media library denied');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      Axios.post('http://ec2-18-212-20-211.compute-1.amazonaws.com:3000/changePfp/' + currentUser + '/' + result.uri, {});
      navigation.navigate('accounts', {});
    }
  };

    const [uname, setUsername] = useState(null);
    const [nLikes, setNumLikes] = useState(null);
    const [nPosts, setNumPosts] = useState(null);
    const [nFriends, setNumFriends] = useState(null);
    const [profilePicture, setProfilePicture] = useState('https://picsum.photos/200');
    const [loading, setLoading] = useState(true);

    //dynamically load user info and populate divs
    useEffect(() => {
      SecureStore.getItemAsync("uID").then((userID)=> {
        console.log(userID)
        console.log('http://ec2-18-212-20-211.compute-1.amazonaws.com:3000/users/' + userID + '/getUsrInfo')
        Axios.get('http://ec2-18-212-20-211.compute-1.amazonaws.com:3000/users/' + userID + '/getUsrInfo').then(async (response) =>{
          console.log(response.data.username)
          setUsername(response.data.username);
          setNumLikes(response.data.numLikes);
          setNumPosts(response.data.numPosts);
          setNumFriends(response.data.numFriends);
          setProfilePicture(response.data.profilePicture);
          setLoading(false);
        });
      });  
    }, []);

    const navigation = useNavigation();  
    
    
    return (
      <StyledView style={styles.styledContainer}>
    
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        

          
        <View style={styles.profileContainer}> 
          <Image style={styles.profilePicture} source={{ uri: loading ? randImg() : profilePicture }} />
          
          <LinearGradient colors={['transparent', '#000000']} style={styles.linearGradient} />
          <Text style={styles.username}>{loading ? "Loading..." : uname}</Text>
          <View style={styles.infoContainer}>
            {/* {getUsrInfo(numLikes)} */}
            <Text style={styles.infoText}>Likess: {loading ? '...' : nLikes} </Text>
            <Text style={styles.infoText}>Posts: {loading ? '...' : nPosts} </Text>
            <Text style={styles.infoText}>Friends: {loading ? '...' : nFriends} </Text>
          </View>

        </View>


        {/* Randomly generated "top sounds" for demonstration pruposes */}
        <View style={styles.topHitsContainer}>
          <Text style={styles.sectionTitle}>Your Top Sounds</Text>
          <View style={styles.songContainer}>
            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={loading ? "Loading..." : uname}/>

            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={loading ? "Loading..." : uname}/>

            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={loading ? "Loading..." : uname}/>

            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={loading ? "Loading..." : uname}/>

            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={loading ? "Loading..." : uname}/>
          </View>
        </View>
        <View style={styles.genresContainer}>
          <Text style={styles.sectionTitle}>Genres</Text>

        </View>
      </ScrollView>
      <StyledView style={{ marginTop: 'auto' /*, width: '100%'*/}}>
        <NavBar navigation={navigation} activeTab="Home"/>
      </StyledView>

    </StyledView>
            
      );
};



/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

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
    fontFamily: 'Syne',
  },
  infoContainer: {
    fontFamily: 'Urbanist',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'left',
    marginTop: 10,
    marginLeft: 10,
    zIndex: 2,
  },
  infoText: {
    fontFamily: 'Urbanist',
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

export default withExpoSnack(Accounts);
