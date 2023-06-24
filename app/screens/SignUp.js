import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';

import Axios from 'axios' 

const SignUp = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [usernameError, setUsernameError] = useState(null);
  
  const StyledText = styled(Text);

  const handleSignUp = () => {
    // Add sign-up logic here

    Axios.post("http://ec2-54-235-233-148.compute-1.amazonaws.com:3000/users", {
      username: username,  
      email: email,
      userPassword: password,
      profilePicture: "https://media.discordapp.net/attachments/908915908758601729/1121652123625607168/pass-colin-1.png?width=559&height=559", 
      numLikes: 0,
      numPosts: 0,
      numFriends: 0,
     }).catch(e => {
      console.log(e);
      return e;
    });
    
    
  };
  
  const handleTestGet = () => {
    Axios.get("http://ec2-54-235-233-148.compute-1.amazonaws.com:3000/users/1/username").then(function (response) {
      // Handle the response data
      console.log(response.data);
    }).catch(function (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    });
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
    // Check if username already exists
    if (text === 'existingusername') {
      setUsernameError('Username already exists');
    } else {
      setUsernameError(null);
    }};
    
/* ------------------------------------------------------------------------------ */
/*     Returns 4 input text boxes that allows for the user to create an account   */
/* ------------------------------------------------------------------------------ */

  return (
    <View style={styles.container}>
      
      <Image
        source={require('../assets/icon.png')}
        style={styles.logo}
      />

      <StyledText tw='text-white text-3xl'>Soundbits</StyledText>
          <View style={styles.inputContainer}>
            <TextInput
              /* ---------------------------  Username --------------------------- */
              style={styles.input}
              placeholder='Username'
              onChangeText={handleUsernameChange}
              value={username}
            />
            {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}
            <TextInput
            /* ------------------------------ Set the Email ----------------------------- */
              style={styles.input}
              placeholder='Email'
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType='email-address'
            />
            <TextInput
            /* ---------------------------- Set the Password ---------------------------- */
              style={styles.input}
              placeholder='Password'
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
            />
            <TextInput
            /* -------------------------- Confirm the Password -------------------------- */
              style={styles.input}
              placeholder='Confirm Password'
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              secureTextEntry={true}
        />
          </View>
      {/* --------------------------- Handle the Sign-up --------------------------- */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleTestGet}>
        <Text style={styles.buttonText}>Test Get Method</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  errorText: {
    color: '#ff0000',
    marginBottom: 10,
  },
});

export default withExpoSnack(SignUp);
