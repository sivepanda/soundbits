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

const randomLikes = Math.floor(Math.random() * 100);
const randomFriends = Math.floor(Math.random() * 1000);

const Accounts = () => {
  const [username, setUsername] = useState('John Doe');
  const [profilePicture, setProfilePicture] = useState('https://picsum.photos/200');
  

    const navigation = useNavigation();  
    return (
        
            <View style={styles.container}>
              <View style={styles.header}>
                <Image style={styles.profilePicture} source={{ uri: profilePicture }} />
                <Text style={styles.username}>{username}</Text>
              </View>
              <View style={styles.likesAndFriends}>
                <Text>{randomLikes} Likes </Text>
                <Text>{randomFriends} Friends</Text>
              </View>
              <View style={styles.soundList}>
                {sounds.map(sound => (
                  <View style={styles.soundItem} key={sound.name}>
                    <Text style={styles.soundName}>{sound.name}</Text>
                    <Text>{sound.name} : {sound.duration}</Text>
                  </View>
                ))}
              </View>
            </View>
        
      );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  likesAndFriends: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  soundList: {
    flex: 1
  },
  soundItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '100%'
  },
  soundName: {
    fontWeight: 'bold'
  }
});

export default withExpoSnack(Accounts);
