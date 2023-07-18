//create a visually appealing welcome screen
import React, { useState, useCallback }  from 'react';
import {Button, View, Text, StyleSheet, Image, Touchable, TouchableOpacity} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

//Allows for these to be styles with tailwind 
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledView = styled(View);
const StyledButton = styled(Button);


SplashScreen.preventAutoHideAsync();

//Welcome Screen Function creates a Welcome screen with a sign-up and sign-in button that the user can use. Also creates a visually appealing Scheme that displays Soundbit's main colour scheme.

//CHANGE THE COLORS TO REFLECT SOUNDBITS COLOR SCHEME --gradient
//First time the user sees the app, good to reflect the app's color scheme
function WelcomeScreen() {
    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        'Syne': require('../assets/fonts/Syne-SemiBold.ttf'),
        'Urbanist': require('../assets/fonts/Urbanist-Regular.ttf'),
        'Arvo' : require('../assets/fonts/Arvo-Regular.ttf')
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);

      if (!fontsLoaded) {
        console.log('fail to load fonts');
        return null;
      }
    
    return (
        <StyledView style={styles.viewContainer} tw="bg-black" onLayout={onLayoutRootView}>
            
            <StyledImage source={require('../assets/icon.png')} tw='bg-contain w-[40vw] h-[40vw]'/>
            <StyledText style={styles.headTex} tw='text-white text-3xl'>Soundbits</StyledText> 
            
            <StyledView style={styles.ContainerBtnView}>
                <LinearGradient colors={['#3897C7', '#6838C7', '#384FC7']} style={[styles.LinearGradient]} />
                <TouchableOpacity onPress = {() => navigation.navigate('SignIn', {})} style = {[styles.Button]}>
                    <StyledView>
                        <StyledText style={styles.bodyTex} tw='color-white'>Sign In</StyledText>
                    </StyledView>
                </TouchableOpacity>
            </StyledView>
            
            <StyledView style={styles.ContainerBtnView}>
                <LinearGradient colors={['#3897C7', '#6838C7', '#384FC7']} style={[styles.LinearGradient]} />
                <TouchableOpacity onPress = {() => navigation.navigate('SignUp', {})} style = {[styles.Button]}>
                    <StyledView>
                        <StyledText style={styles.bodyTex} tw='color-white'>Sign Up</StyledText>
                    </StyledView>
                </TouchableOpacity>
            </StyledView>
            
       </StyledView>
    );
}

//CSS Style Sheet
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ContainerBtnView: {
        marginTop: 5,
        // backgroundColor:'green',
        justifyContent:'center',
        alignContent: 'center',
        height:'8%',
        width: '90%',
    },
    Button: {
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 0,
        // paddingVertical: 25,
        // paddingHorizontal: '35%',
        // opacity:0.5,
    },
    LinearGradient: {
        alignSelf: 'center',

        marginTop: 0,
        margin: 0,
        height: '300%',
        width: '15%',
        borderRadius: 25,
        position: 'absolute',
        transform: [{ rotate: '90deg' }],
        borderColor: 'indigo',
        borderWidth: 2,
    },
    headTex: {
        fontFamily: 'Syne',
    },
    bodyTex: {
        fontFamily: 'Urbanist',
        fontSize: 20,
    }
});

export default withExpoSnack(WelcomeScreen);