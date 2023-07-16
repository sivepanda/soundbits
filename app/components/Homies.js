import React, { useState, useCallback } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button, Image } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { uniqueNamesGenerator, adjectives, names, colors, animals } from 'unique-names-generator';

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledIcon = styled(Ionicons);

const config = {
    dictionaries: [names],
    style: 'capital'
}

function randImg() {
    return 'https://picsum.photos/400';
}


/* ------------------------------- Creates one friend, or "homie" ------------------------------- */
//The homies can be deleted by being clicked on, but are otherwise very basic

const Sound = (props) => {
    const [isVisible, setIsVisible] = useState(true);

    //delete a friend
    const handleDelete = () => {
        setIsVisible(false);
    }

    //load custom fonts
    const [fontsLoaded] = useFonts({
        'Syne': require('../assets/fonts/Syne-SemiBold.ttf'),
        'Urbanist': require('../assets/fonts/Urbanist-SemiBold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        console.log('fail to load');
        return null;
    }

    // is visible for if user is unfriended
    if (isVisible) {
        return (
            <StyledView style={styles.box} tw=" h-[9vh] w-[90vw] mb-6 bg-transparent ">
                <View style={styles.colplay}>
                    <StyledImage style={styles.plbt} source={{ uri: randImg() }} />
                    <LinearGradient style={styles.dGradient} colors={['transparent', 'black']} />
                    <StyledText style={styles.nm} tw="mt-1 ml-4 text-2xl color-white text-center font-semibold">{uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}</StyledText>
                </View>
                <View style={styles.removeButton}>
                    <TouchableOpacity onPress={handleDelete}>
                        <StyledIcon tw='pl-2' name="person-remove" size={16} color={'rgb(110, 0, 255)'} />
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


/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
    dGradient: {
        marginLeft: -50,
        transform: [{ rotate: '270deg' }],
        height: 50,
        width: 60,
    },
    container: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nm: {
        marginLeft: -15,
        fontFamily: 'Syne',
    },
    plbt: {
        width: 60,
        height:60,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#1c1917',
    },
    colinfo: {
        flexDirection: 'row',
        marginLeft: 20,

    }, colplay: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'flex-end'
        // marginLeft: 10
    },
    profilePicture: {
        alignContent: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 25,
        marginRight: 10,
        marginLeft: 10,
        // marginTop: 30
    },
    removeButton: {
        alignSelf: 'auto',
        marginLeft: 'auto'
    },
});

export default Sound;