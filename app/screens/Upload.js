import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';
// var bcrypt = require('react-native-bcrypt');
import * as Random from 'expo-random';
import * as SecureStore from 'expo-secure-store';
import { Audio, Platform } from 'expo-av';
import NavBar from '../components/Nav';
import Title from '../components/Title';
import * as FileSystem from 'expo-file-system';
import { toByteArray } from 'base64-js';

import AWS from 'aws-sdk';



const Upload = () => {
  const [soundName, setSoundName] = useState('');

  const StyledText = styled(Text);
  const StyledTitle = styled(Title);
  const StyledView = styled(View);
  const navigation = useNavigation();

  const [recording, setRecording] = useState(null);

  const [sounduri, setSoundUri] = useState('');


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
      await recording.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    console.log('Stopping recording..');
    await recording.stopAndUnloadAsync();
    setSoundUri(recording.getURI());
    setRecording(null);

    console.log('Recording stopped and stored at', sounduri);
  };

  const uploadSound = async () => {
    const activeUser = parseInt(await SecureStore.getItemAsync('uID'));
    // Configure the AWS SDK with your credentials and region
    /// FIX SECRETS
    AWS.config.update({
      accessKeyId: process.env.EXPO_PUBLIC_AWS_ACCESS_KEY,
      secretAccessKey: process.env.EXPO_PUBLIC_S_ACCESS_KEY,
      region: process.env.EXPO_PUBLIC_AWS_REGION,
    });

    console.log(process.env.AWS_ACCESS_KEY);

    const S3 = new AWS.S3();
    const bucketName = 'soundbits-master';
    var rand = parseInt(Math.random() * 10000000);
    const fileName = (soundName ? (soundName) : 'sound') + rand + '.m4a';


    if (sounduri) {
      //upload file to S3 instance
      try {
        const fileData = toByteArray(await FileSystem.readAsStringAsync(sounduri, {
          encoding: FileSystem.EncodingType.Base64,
        }));
        const params = {
          Bucket: bucketName,
          Key: fileName,
          Body: fileData,
          ContentType: ';audio/m4a', // Change the content type as per your file
        };

        const response = await S3.putObject(params).promise();
        console.log('File uploaded successfully:', response);
      } catch (error) {
        console.error('Error uploading file:', error);
      }

      console.log(soundName, fileName, activeUser);


      //update database
      Axios.post("http://ec2-18-212-20-211.compute-1.amazonaws.com:3000/sounds", {
        name: soundName,
        genre: 'undefined',
        url: 'https://soundbits-master.s3.amazonaws.com/' + fileName,
        numLikes: 0,
        UserId: activeUser
      }).catch(e => {
        console.log(e);
        return e;
      });

    } else {
      console.log('Sound URI not found')
    }



  }


  /* ------------------------------------------------------------------------------------------------------------------ */
  /*                Allow for a returning user to access their account instead of creating a new account                */
  /* ------------------------------------------------------------------------------------------------------------------ */

  return (
    <View style={styles.container}>
      <StyledTitle tm="Upload" />


      {/* ----------------------------- Username input ----------------------------- */}
      <View style={(sounduri ? styles.inputContainer : styles.none)}>
        <TextInput
          style={styles.input}
          placeholder='Sound Name'
          onChangeText={(text) => setSoundName(text)}
          value={soundName}
        />
        { /* ---------------------------- Password input ---------------------------- */}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => (recording ? stopRecording() : startRecording())}>
        <Text style={styles.buttonText}>{recording ? "Stop Recording" : "Record"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={(sounduri ? styles.button : styles.none)} onPress={() => uploadSound()}>
        <Text style={styles.buttonText}>{sounduri ? "Upload" : "hmm"}</Text>
      </TouchableOpacity>

      <StyledView tw='mt-[51vh]' style={{ marginTop: 'auto' }}>
        <NavBar navigation={navigation} activeTab="Search" />
      </StyledView>

    </View>


  );
};



/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
  none: {
    display: 'none',
  },
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
