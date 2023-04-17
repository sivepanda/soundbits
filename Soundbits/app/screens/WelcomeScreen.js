import React from 'react';
import {Button, View, Text} from 'react-native';

import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";

const StyledText = styled(Text);

function WelcomeScreen(props) {
    return (
        <View style={{flex:1, backgroundColor: "dodgerblue",}} >
            <StyledText style={{flex:1}} tw='bg-green-600'>Yo, this is cool</StyledText>
            <Button title="Blank Button"/>
       </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    styTex: {

    }
});


export default withExpoSnack(WelcomeScreen);