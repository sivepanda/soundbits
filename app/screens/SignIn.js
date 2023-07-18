import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';
var bcrypt = require('react-native-bcrypt');
import * as Random from 'expo-random';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
}

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
    
    //make a get request to get user info, store ID to local storage
    Axios.get('http://ec2-54-235-233-148.compute-1.amazonaws.com:3000/users/getId/' + username).then(async (response) =>{
      // var x = JSON.parse(response.data.uID);
      console.log(username, (await Axios.get("http://ec2-54-235-233-148.compute-1.amazonaws.com:3000/users/"+ response.data + "/userPassword")).data.userPassword)
      //encrypt / hash
      bcrypt.compare(password, (await Axios.get("http://ec2-54-235-233-148.compute-1.amazonaws.com:3000/users/"+ response.data + "/userPassword")).data.userPassword, async function(err, res) {
        console.log(password, "\n", "http://ec2-54-235-233-148.compute-1.amazonaws.com:3000/users/"+ response.data + "/userPassword")  
        if(res) {
          SecureStore.setItemAsync("uID", String(response.data)).then((r) => {
            console.log(r);
            navigation.navigate('Home', {});
          });
          } else {
            console.log('failed to login')
        }
      })
    });
  }

  //load custom fonts
  const [fontsLoaded] = useFonts({
    'Syne': require('../assets/fonts/Syne-SemiBold.ttf'),
    'Urbanist': require('../assets/fonts/Urbanist-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
        await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

if (!fontsLoaded) {
    console.log('fail to load');
    return null;
}

  /* ------------------------------------------------------------------------------------------------------------------ */
  /*                Allow for a returning user to access their account instead of creating a new account                */
  /* ------------------------------------------------------------------------------------------------------------------ */

  return (
    <View style={styles.container}>
     
      <Image
        source={require('../assets/icon.png')}
        style={styles.logo}
      />
      <StyledText style={styles.itle} tw='text-white'>Sign In</StyledText>
      
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
    <View style={styles.buttonGroup}>
      <TouchableOpacity style={styles.button} onPress={() => handleSignIn()}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', {})}>
        <Text style={styles.buttonText}>Skip Sign In</Text>
      </TouchableOpacity>
    </View>
      
    </View>
  );
};



/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#000',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  buttonGroup: {
    width: '100%',
  },
  itle: {
    fontFamily: 'Syne',
    marginBottom: 40,
    paddingBottom: 0,
    fontSize: 50,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 30,
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
