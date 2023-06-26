import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { uniqueNamesGenerator, adjectives, names, colors, animals } from 'unique-names-generator';

import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';
import NavBar from '../components/Nav';

import Sound from '../components/Sound';

import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledView = styled(View);
const StyledButton = styled(Button);

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
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  return min + ":" + sec;
}

/* ------------------------ Shows active user account ----------------------- */

const Accounts = () => {
  const [username, setUsername] = useState('John Doe');
  const [profilePicture, setProfilePicture] = useState('https://picsum.photos/200');
  
    async function getUsrInfo(attribute) { 
      const userID = await AsyncStorage.getItem('user-id');
      console.log('yo')
      Axios.get('http://ec2-54-235-233-148.compute-1.amazonaws.com:3000/' + userID + '/getId/' + attribute).then(async (response) =>{
        console.log(response)
        return response;
      });
    }


    const navigation = useNavigation();  
    return (
        
            <StyledView style={styles.container}>
              <StyledView tw='w-[100vw] h-[25vh] bg-indigo-900' style={styles.header}>
                
                <View style={styles.userinfo}>
                  <Image style={styles.profilePicture} source={{ uri: profilePicture }} />
                  <Text style={styles.username}>{username}</Text>
                </View>
                
                <StyledView tw='w-[80vw] ml-[20vw]' style={styles.Information}>
                  <View style={styles.likes}>
                      <StyledText tw="text-2xl color-white text-center font-semibold">{randomLikes}</StyledText>
                      <StyledText tw="text-1xl color-white text-center font-semibold">likes</StyledText>
                  </View>
                  <View style={styles.posts}>
                      <StyledText tw="text-2xl color-white text-center font-semibold">{randomPosts}</StyledText>
                      <StyledText tw="text-1xl color-white text-center font-semibold">posts</StyledText>
                  </View>
                  <View style={styles.friends}>
                      <StyledText tw="text-2xl color-white text-center font-semibold">{randomFriends}</StyledText>
                      <StyledText tw="text-1xl color-white text-center font-semibold">friends</StyledText>
                  </View>
                </StyledView>
              </StyledView>

              
              
              <StyledView tw="w-[100vw]" style={styles.soundList}>
                    
                
                  <ScrollView showsVerticalScrollIndicator={false} syle= {styles.title}>
                   
                    {/* Scrollable component with 5 random people */}
                    <View style>
                        <StyledText tw="text-4xl color-white pt-[2vh] pb-[2vh] font-bold">Your Top 5 Sounds:</StyledText>
                    </View>
                    <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={ "Likes: " + (Math.floor(randomLikes/5))}/>
                    <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={"Likes: " + (Math.floor(randomLikes/6))}/>
                    <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={"Likes: " + (Math.floor(randomLikes/7))}/>
                    <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={"Likes: " + (Math.floor(randomLikes/9))}/>
                    <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={"Likes: " + (Math.floor(randomLikes/11))}/>
                  </ScrollView>
              
              </StyledView>
              <StyledView style={{ marginTop: 'auto', width: '100%'}}>
                <NavBar navigation={navigation} activeTab="Accounts"/>
              </StyledView>
            </StyledView>
            
      );
};



/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#312e81',
    flexDirection: 'column',
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  likes: {
    alightItems: 'center',
    paddingHorizontal: 15
  },
  posts: {
    alightItems: 'center',
    paddingHorizontal: 15
  },
  friends: {
    alightItems: 'center',
    paddingHorizontal: 15
  },
  profilePicture: {
    alignContent:'center',
    justifyContent:'center',
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 10,
    marginLeft: 10,
    // marginTop: 30
  },
  username: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  Information: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    paddingLeft: 0,
    marginBottom: 20
  },
  soundList: {
    flex: 1,
    backgroundColor: 'black',
    // width: '110%',
    alignItems: 'center'
  },
  soundItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#eee',
    padding: 30,
    marginVertical: 10,
    borderRadius: 10,
    width: '90%'
  },
  soundName: {
    fontWeight: 'bold',
    textAlign: 'left'
  }, 
  userinfo: {
    // backgroundColor:'blue',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40,
    marginBottom: 5
  }
});

export default withExpoSnack(Accounts);
