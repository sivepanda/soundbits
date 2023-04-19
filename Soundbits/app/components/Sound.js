

import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Button, Image} from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledButton = styled(Button);

const Sound = (props) => {
    return(
        <StyledView style={styles.box} tw="rounded-xl h-[11vh] w-[90vw] bg-cyan-400 shadow-sm">
            <View style={styles.colplay}>
                <StyledImage style={styles.plbt} source={require('../assets/play-button.png')} tw='bg-contain ml-4 w-[5vh] h-[5vh]'/>
                <StyledText style={styles.mono} tw="mt-1 ml-4">{props.tm}</StyledText>
            </View>
            <View style={styles.colinfo}>
                <StyledText tw="font-bold text-3xl">{props.nm}</StyledText>
                <StyledText>{props.auth}</StyledText>

            </View>
        </StyledView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flexDirection:'row',
    alignItems: 'center',
  },
  colinfo: {
    flexDirection:'column',
    marginLeft: 20

  }, colplay: {
    flexDirection:'column',
    alignItems:'center'
    // marginLeft: 10
  }, mono: {
    fontFamily: "Courier New"
  }
});

export default Sound;