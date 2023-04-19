import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';

const sounds = [
  { name: 'Sound 1', duration: '1:23' },
  { name: 'Sound 2', duration: '2:34' },
  { name: 'Sound 3', duration: '3:45' },
  { name: 'Sound 4', duration: '4:56' },
  { name: 'Sound 5', duration: '5:67' }
];

const randomLikes = Math.floor(Math.random() * 10000);
const randomFriends = Math.floor(Math.random() * 1000);
const randomPosts = Math.floor(Math.random() * 100);
const StyledText = styled(Text);


const Accounts = () => {
  const [username, setUsername] = useState('John Doe');
  const [profilePicture, setProfilePicture] = useState('https://picsum.photos/200');
  

    const navigation = useNavigation();  
    return (
        
            <View style={styles.container}>
              <View style={styles.header}>
                <Image style={styles.profilePicture} source={{ uri: profilePicture }} />
                <Text style={styles.username}>@{username}</Text>
              </View>
              <View style={styles.Information}>
                <View style={styles.likes}>
                    <StyledText tw="text-2xl text-center font-semibold">{randomLikes}</StyledText>
                    <StyledText tw="text-1xl text-center font-semibold">likes</StyledText>
                </View>
                <View style={styles.posts}>
                    <StyledText tw="text-2xl text-center font-semibold">{randomPosts}</StyledText>
                    <StyledText tw="text-1xl text-center font-semibold">posts</StyledText>
                </View>
                <View style={styles.friends}>
                    <StyledText tw="text-2xl text-center font-semibold">{randomFriends}</StyledText>
                    <StyledText tw="text-1xl text-center font-semibold">friends</StyledText>
                </View>
              </View>
              <View style={styles.soundList}>
                    <View>
                        <StyledText tw="text-4xl font-bold">Top 5 Sounds:</StyledText>
                    </View>
                {sounds.map(sound => (
                  <View style={styles.soundItem} key={sound.name}>
                    <StyledText tw="text-3xl" style={styles.soundName}>{sound.name}</StyledText>
                    <StyledText tw="text-2xl" >{sound.duration}</StyledText>
                  </View>
                ))}
              </View>
            </View>
        
      );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#825ee6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  header: {
    backgroundColor: '#825ee6',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 5
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
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 10,
    marginTop: 30
  },
  username: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  Information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 70,
    marginBottom: 20
  },
  soundList: {
    flex: 1,
    backgroundColor: '#fff',
    width: '110%',
    alignItems: 'center'
  },
  soundItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    padding: 30,
    marginVertical: 10,
    borderRadius: 10,
    width: '90%'
  },
  soundName: {
    fontWeight: 'bold',
    alightItems: 'right'
  }
});

export default withExpoSnack(Accounts);
