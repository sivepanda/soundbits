import React, { useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Button, Image} from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { Ionicons } from '@expo/vector-icons';

import { uniqueNamesGenerator, adjectives, names, colors, animals } from 'unique-names-generator';

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledButton = styled(Button);
const StyledIco = styled(Ionicons);

const config = {
    dictionaries: [names],
    style: 'capital'
}

function randImg() {
    return 'https://picsum.photos/400';
}

const Sound = (props) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDelete = () => {
        setIsVisible(false);
    }

    if(isVisible) {
        return (<StyledView style={styles.box} tw="rounded-xl h-[9vh] w-[90vw] mb-6 bg-gray-400 shadow-sm">
            <View style={styles.colplay}>
                <StyledImage style={styles.plbt} source={ {uri: randImg()} } tw='bg-contain rounded-xl ml-4 w-[7vh] h-[7vh]'/>
                <StyledText tw="mt-1 ml-4 text-2xl color-black text-center font-semibold">{uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}</StyledText>
                <TouchableOpacity onPress={handleDelete}>
                    <StyledIco style={styles.icon} tw='pl-2' name="person-remove" size={16} color={'#7f1d1d'} />

                </TouchableOpacity>

            </View>
            <View style={styles.colinfo}>
                <StyledText tw="font-bold text-3xl">{props.nm}</StyledText>
                <StyledText>{props.auth}</StyledText>

            </View>
        </StyledView>)
    } else return (
        <StyledView style={styles.box} tw="rounded-xl h-[0vh] w-[0vw] m-0">
            
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
    flexDirection:'row',
    marginLeft: 20

  }, colplay: {
    flexDirection:'row',
    alignItems:'center',
    // justifyContent: 'flex-end'
    // marginLeft: 10
  }, 
  profilePicture: {
    alignContent:'center',
    justifyContent:'center',
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 10,
    marginLeft: 10,
    // marginTop: 30
  },

});

export default Sound;