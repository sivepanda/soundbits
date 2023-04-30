import React from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';

import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';

import { uniqueNamesGenerator, adjectives, names, colors, animals } from 'unique-names-generator';

import { useNavigation } from '@react-navigation/native';

//import Sound from 'react-native-sound';

//import TrackPlayer from 'react-native-track-player';


import Sounds from '../components/Sound'
import NavBar from '../components/Nav';
import Title from '../components/Title';

const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledView = styled(View);
const StyledButton = styled(Button);
const StyledTitle = styled(Title);

/* -------------------------------------Sound------------------------------- 
https://blog.logrocket.com/how-to-play-sounds-in-react-native-using-react-native-sound/
docs used

---PROBLEM: NEED TO LINK IOS AND REACT NATIVE SOUND
---PREVIOSLY YOUèd AUTOLINK WITH react-native link react-native-sound IN CMD
---ITS WAY STUPIDER NOW

Sound.setCategory('Playback');

var metaa = new Sound('../assets.meta.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // when loaded successfully
    console.log('duration in seconds: ' + metaa.getDuration() + 'number of channels: ' + metaa.getNumberOfChannels());
  });

  const playPause = () => {
    metaa.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  };

   -------------------------------------------------------------------------- */

/* ---------------------------------TrackPlayer-------------------------------------- 


Use this instead of react native sound
add this: TrackPlayer.registerPlaybackService(() => require('./service')); to index.js
or this: 

import TrackPlayer from 'react-native-track-player';
AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./service'));

to index.js

https://github.com/doublesymmetry/react-native-track-player/issues/932 
to get this to work

https://react-native-track-player.js.org/docs/basics/getting-started/
official TrackPlayer docs

TrackPlayer.setupPlayer()

const track1 =  {
    url: require('../assets/meta.mp3'), // Load media from the app bundle
    title: 'Metamorposis',
    artist: 'Jaxon',
    artwork: require('../assets/icon.png'), // Load artwork from the app bundle
    duration: 90
};

 TrackPlayer.add(track1);

const state = TrackPlayer.getState();
if (state === State.Playing) {
    console.log('The player is playing');
};

let trackIndex = TrackPlayer.getCurrentTrack();
let trackObject = TrackPlayer.getTrack(trackIndex);
console.log(`Title: ${trackObject.title}`);

const position = TrackPlayer.getPosition();
const duration = TrackPlayer.getDuration();
console.log(`${duration - position} seconds left.`);
 -------------------------------------------------------------------------- */


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
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    return min + ":" + sec;
}

function Home() {
    const navigation = useNavigation();
    return (
        <StyledView style={styles.viewContainer}>
            <StyledView tw="mt-[-70vh]" style={styles.head}>
                <StyledTitle tm="Home" />
                </StyledView>
                <View style={{alignItems: 'left'}}>
                        <StyledText tw="text-4xl color-white pt-[2vh] pb-[2vh] font-bold">Explore Sounds:</StyledText>
                </View>
               {/*
               IS A PLAY SOUND BUTTON (meant to be one)
                <TouchableOpacity style={styles.playBtn} onPress={playPause}>
                    <Ionicons name={'ios-play-outline'} size={36} color={'#fff'} />
                </TouchableOpacity>
               */}
            <Sounds tm={ "1:31" } nm={ "Metamorphisis" } auth={"Jaxon Durken"}/>
            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
            <Sounds tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
            
            <StyledView style={ styles.bott }>
                <NavBar navigation={navigation} activeTab="Accounts" />
            </StyledView>
       </StyledView>
    );
}


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
    head: {
        marginTop: 0,
        paddingTop:0,
    },
    bott: {
        marginTop: 'auto',
    },
    /* ------------------------------- Added this for R-N-Sound ------------------------------- 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      },
      playBtn: {
        padding: 20,
      }
       -------------------------------------------------------------------------- */
    
});


export default withExpoSnack(Home);