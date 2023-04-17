import React from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';

import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";

const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledView = styled(View);
// const StyledButton = styled(Button);

function WelcomeScreen(props) {
    return (
        <StyledView style={styles.viewContainer} tw="bg-black">
            <StyledImage style={styles.styTex} source={require('../assets/icon.png')} tw='bg-contain w-[40vw] h-[40vw]'/>
            <StyledText style={styles.styTex} tw='font-sans text-white text-3xl'>Soundbits</StyledText>
            {/* <StyledButton style={styles.styBut} title="Log In" nw= { sty }/> */}
       </StyledView>
    );
}

// const sty = nw`bg-blue-500 text-white`;

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