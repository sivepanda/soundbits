import React from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';

import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledView = styled(View);
const StyledButton = styled(Button);

function WelcomeScreen() {
    const navigation = useNavigation();
    
    return (
        <StyledView style={styles.viewContainer} tw="bg-black">
            <StyledImage source={require('../assets/icon.png')} tw='bg-contain w-[40vw] h-[40vw]'/>
            <StyledText style={styles.styTex} tw='text-white text-3xl'>Soundbits</StyledText>
            <Button style={styles.styBut} 
            onPress={ () => navigation.navigate('Home', {})  } 
            title="Log In" tw='bg-white w-[20vw] h-[30vw]'/>
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


export default withExpoSnack(WelcomeScreen);