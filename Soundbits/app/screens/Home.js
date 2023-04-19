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
    dictionaries: [names]
  }

function Home() {
    const navigation = useNavigation();
    var z = Math.floor((Math.random() * 10) + 1);
    const [time, setTime] = (z < 10 ? "0" + z : z);
    return (
        <StyledView style={styles.viewContainer}>
            <Sound tm={ time } nm="Raindrops" auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    styTex: {
    }
});


export default withExpoSnack(Home);