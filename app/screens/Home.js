import React from 'react';
import {Button, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';

import { withExpoSnack } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';

import { uniqueNamesGenerator, adjectives, names} from 'unique-names-generator';

import { useNavigation } from '@react-navigation/native';

import Sounds from '../components/Sound'
import NavBar from '../components/Nav';
import Title from '../components/Title';
import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';

const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledView = styled(View);
const StyledButton = styled(Button);
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

function Home() {
    const navigation = useNavigation();
    
    function randImg() {
        return 'https://picsum.photos/400';
    }

    const ProfilePicturesBar = () => {
        // Dummy data for profile pictures and usernames
        const users = [
          { id: 1, username: 'random user', image: ""},
          { id: 2, username: 'random user', image: ""},
          { id: 3, username: 'random user', image: ""},
          { id: 4, username: 'random user', image: ""},
          { id: 5, username: 'random user', image: ""},
          { id: 6, username: 'random user', image: ""},
          { id: 7, username: 'random user', image: ""},
          { id: 8, username: 'random user', image: ""},
        ];
        
        const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
          if(layoutMeasurement.width - contentOffset.x > 20){
            return false
          } else {
            return true
          }
        };
        
        function fetchUsers() {
          // Function to fetch users from the API
          fetch(`YOUR_API_URL?page=${page}`)
              .then(response => response.json())
              .then(data => {
                  // Append the newly fetched users to the existing list
                  setUsers(prevUsers => [...prevUsers, ...data.users]);
              })
              .catch(error => {
                  console.error('Error fetching users:', error);
              });
        }

        function handleEndReached(){
          console.log('end reached')
        };

        return (
            <View style={styles.container}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.userContainer}
                onScroll={({ nativeEvent }) => {
                  if (isCloseToBottom(nativeEvent)) {
                      handleEndReached();
                  }
              }}
              scrollEventThrottle={400}
              >
                {users.map(user => (
                  <View key={user.id} style={styles.userCard}>
                    <Image source={{ uri: randImg() }} style={styles.userImage} />
                    <TouchableOpacity onPress={''}>
                        <Text style={styles.username}>{user.username}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
          );
        };

    return (
        <StyledView style={styles.viewContainer}>
        
                <StyledView tw="mt-[-70vh]" style={styles.head}>
                    <StyledTitle tm="Home" />
                </StyledView>
                <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
                    <ProfilePicturesBar />
                    <StyledView style={styles.viewContainer}>
                      <Sounds tm={ "1:31" } nm={ "Meta" } auth={"Jaxon Durken"} src={'meta.mp3'}/>
                      <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                      <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                      <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                      <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                      <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                      <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                    </StyledView>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ViewAccount', {})}>
                      <Text style={styles.title}>TESTING</Text>
                    </TouchableOpacity>
                </ScrollView>
                
            <StyledView style={ styles.bott }>
                <NavBar navigation={navigation} activeTab="Home" />
            </StyledView>
            
       </StyledView>
    );
}


/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        // marginTop: 0,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black',
        // justifyContent: 'center',
        justifyContent: 'flex-end',
    },

    explore: {
     
    },

    head: {
        marginTop: 0,
        paddingTop:0,
    },
    bott: {
        marginTop: 'auto',
    },
    container: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      marginTop: -18,
      color: 'white',
      alignContent: 'center',
    },
    userContainer: {
      flexDirection: 'row',
      margin: 15,
    },
    userCard: {
      marginRight: 16,
      alignItems: 'center',
      backgroundColor: 'transparent', 
      borderRadius: 8,
      padding: 8,
      width: 100, // Adjust the width as needed
    },
    userImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    username: {
      marginTop: 8,
      textAlign: 'center',
      color: 'white'
    },  
    scrollView: {
      alignContent: 'center'
    }
});


export default withExpoSnack(Home);