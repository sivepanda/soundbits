import React from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';

import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';

import { uniqueNamesGenerator, adjectives, names, colors, animals } from 'unique-names-generator';

import { useNavigation } from '@react-navigation/native';

import Sound from '../components/Sound'

const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledView = styled(View);
const StyledButton = styled(Button);

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
        <StyledView tw="h-[100vh]" style={styles.viewContainer}>
            <StyledView tw="w-[100vw] h-[20vh] mt-0" style={styles.header}>
                <StyledText tw="mt-[10vh] ml-[7vw] color-white" style={styles.username}>Home</StyledText>
            </StyledView>
            
            <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
            <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
            <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
            <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
            
            <Button style={styles.styBut} 
            onPress={ () => navigation.navigate('Accounts', {})  } 
            title="To Accounts" tw='bg-white w-[20vw] h-[30vw]'/>

            <Button style={styles.styBut} 
            onPress={ () => navigation.navigate('Upload', {})  } 
            title="Upload" tw='bg-white w-[20vw] h-[30vw]'/>
       </StyledView>
    );
}


const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        marginTop: -100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: '#825ee6',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 40
    },
    username: {
        fontSize: 40,
        fontWeight: 'bold'
    },
});


export default withExpoSnack(Home);