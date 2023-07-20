import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';
// var bcrypt = require('react-native-bcrypt');
import * as Random from 'expo-random';
import * as SecureStore from 'expo-secure-store';
import { Audio } from 'expo-av';
import NavBar from '../components/Nav';
import Title from '../components/Title';

import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google'

// GOOGLE DRIVE CONSTANTS
const CLIENT_ID = '138676097879-8d34pesopas6hn04oblj3cvgfo4fjsoa.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04mGCR6zqAH-YCgYIARAAGAQSNwF-L9Ir3mCkV1ye07lwJAMwHdz2csUeiiVS-Vn9GPXU-gtXsfWuMemlqbN9kRt5jeVs4999zfs';



const Upload = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: CLIENT_ID
  })
  
  const StyledText = styled(Text);
  const StyledTitle = styled(Title);
  const StyledView = styled(View);
  const navigation = useNavigation();

  const [recording, setRecording] = useState(null);

  

  const startRecording = async () => {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    console.log('Stopping recording..');
    setRecording(null);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
  };


  /* ------------------------------------------------------------------------------------------------------------------ */
  /*                Allow for a returning user to access their account instead of creating a new account                */
  /* ------------------------------------------------------------------------------------------------------------------ */

  return (
    <View style={styles.container}>
        <StyledTitle tm="Upload" />
        
      
     {/* ----------------------------- Username input ----------------------------- */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Sound Name'
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
     { /* ---------------------------- Password input ---------------------------- */ }
      </View>

      <TouchableOpacity style={styles.button} onPress={() => startRecording()}>
        <Text style={styles.buttonText}>Record</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => stopRecording()}>
        <Text style={styles.buttonText}>Stop Recording</Text>
      </TouchableOpacity>

      <StyledView tw='mt-[51vh]' style={{ marginTop: 'auto' }}>
            <NavBar navigation={navigation} activeTab="Search"/>
        </StyledView>
      
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
    // padding: 20,
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

export default withExpoSnack(Upload);
