import React from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';

import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';

import { uniqueNamesGenerator, adjectives, names, colors, animals } from 'unique-names-generator';

import { useNavigation } from '@react-navigation/native';

// import Sound from 'react-native-sound';

import Sounds from '../components/Sound'
import NavBar from '../components/Nav';
import Title from '../components/Title';

const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledView = styled(View);
const StyledButton = styled(Button);
const StyledTitle = styled(Title);

// Sound.setCategory('Playback');

// const mySound = new Sound('../assets/meta.mp3', Sound.LIBRARY, (error) => {
    
// })

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
    }
    
});


export default withExpoSnack(Home);