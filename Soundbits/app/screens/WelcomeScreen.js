import React from 'react';
import {Button, View, Text, StyleSheet, Image, Touchable, TouchableOpacity} from 'react-native';

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
            <TouchableOpacity onPress = {() => navigation.navigate('SignIn', {})} style = {styles.Button}>
                <StyledView>
                    <StyledText tw='color-white'>Sign In</StyledText>
                </StyledView>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate('SignUp', {})} style = {styles.Button}>
                <StyledView>
                    <StyledText tw='color-white'>Sign Up</StyledText>
                </StyledView>
            </TouchableOpacity>
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
    Button: {
        margin: 10,
        marginBottom: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 15

    }
});


export default withExpoSnack(WelcomeScreen);