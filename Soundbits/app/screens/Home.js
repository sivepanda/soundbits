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

function Home() {
    const navigation = useNavigation();
    return (
        <StyledView style={styles.viewContainer}>

            <StyledText tw='rounded-sm bg-slate-400 p-9 '>test</StyledText>

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