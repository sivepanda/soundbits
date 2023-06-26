import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';
var bcrypt = require('react-native-bcrypt');
import * as Random from 'expo-random';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const StyledText = styled(Text);
  const navigation = useNavigation();

  const handleSignIn = () => {
    // Add sign-in logic here
    bcrypt.setRandomFallback((len) => {
      const bytes = Random.getRandomBytes(len);
      console.log("set")
      return bytes;
    });

    

<<<<<<< HEAD
    const id = Axios.get('http://ec2-54-235-233-148.compute-1.amazonaws.com:3000/getId/' + username);
    console.log("123", id, username);
    bcrypt.compare(password, Axios.get("http://ec2-54-235-233-148.compute-1.amazonaws.com:3000/users/"+ id + "/userPassword"), function(err, res) {
    console.log(password, "\n", "http://ec2-54-235-233-148.compute-1.amazonaws.com:3000/users/"+ id + "/userPassword".userPassword)  
    if(res) {
        navigation.navigate('Home', {})
      } else {
        console.log('failed to login')
      }
    });
  
=======
    Axios.get('http://ec2-54-235-233-148.compute-1.amazonaws.com:3000/users/getId/' + username).then(async (response) =>{
      // var x = JSON.parse(response.data.uID);
      console.log(username, (await Axios.get("http://ec2-54-235-233-148.compute-1.amazonaws.com:3000/users/"+ response.data + "/userPassword")).data.userPassword)
      bcrypt.compare(password, (await Axios.get("http://ec2-54-235-233-148.compute-1.amazonaws.com:3000/users/"+ response.data + "/userPassword")).data.userPassword, async function(err, res) {
        console.log(password, "\n", "http://ec2-54-235-233-148.compute-1.amazonaws.com:3000/users/"+ response.data + "/userPassword")  
        if(res) {
            try {
              await AsyncStorage.setItem('my-key', value);
              navigation.navigate('Home', {})

            } catch (e) {
              console.log('failed to save user to session')
              navigation.navigate('Home', {})
            }
          } else {
            console.log('failed to login')
        }
      })
    })
    
    
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  *
    *                                                                                                                                                       *
    *                       CURRENTLY YOU ONLY HAVE TO PRESS SIGN IN ON THE SIGN IN PAGE TO GET TO HOME                                                     *
    *                                                                                                                                                       *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
>>>>>>> 0836a1e7b90b0f7d6e1b2ef28decc5d2e1c9a61a
  };

  /* ------------------------------------------------------------------------------------------------------------------ */
  /*                Allow for a returning user to access their account instead of creating a new account                */
  /* ------------------------------------------------------------------------------------------------------------------ */

  return (
    <View style={styles.container}>
     
      <Image
        source={require('../assets/icon.png')}
        style={styles.logo}
      />
      <StyledText tw='text-white text-3xl'>Soundbits</StyledText>
      
     {/* ----------------------------- Username input ----------------------------- */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
     { /* ---------------------------- Password input ---------------------------- */ }
        <TextInput
          style={styles.input}
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => handleSignIn()}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', {})}>
        <Text style={styles.buttonText}>Skip Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};



/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default withExpoSnack(SignIn);
