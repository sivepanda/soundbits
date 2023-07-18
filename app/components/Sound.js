import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button, Image, Dimensions } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const { width, height } = Dimensions.get('window');

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledButton = styled(Button);

    /* ----- Returns a functional sound button that only plays the best music ---- */

const Sound = (props) => {

    const [isDownloaded, setIsDownloaded] = useState(false);

    const handleDownload = () => {
        setIsDownloaded(true);
    }

    const [isLiked, setIsLiked] = useState(false);

    const handleLiked = () => {
        setIsLiked(true);
    }

    const handleFindAccount = () => {
        
    }

    const [sound, setSound] = React.useState();

    /* ---------------------------  Creates a sound object on the screen, plays from prop -------------------------- */

    async function playSound() {

        if (props.src) {
            sound ? await sound.unloadAsync() : null;
            console.log('Loading Sound');
            const source = '../assets/' + props.src;
            console.log('../assets/' + props.src + ' 111 ' + source);
            const { sound } = await Audio.Sound.createAsync(require('../assets/meta.mp3'));
            Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                playsInSilentModeIOS: true,
            });
            setSound(sound);

            console.log('Playing Sound');
            await sound.playAsync();
        } else {
            return null;
        }
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

/* ---------------------------  Creates a sound object on the screen -------------------------- */
// However, this object can only play Metamorphosis

    return (
        <StyledView style={styles.box} tw="rounded-xl h-[9vh] w-[90vw] mb-0">
            <View style={styles.colplay}>
                <TouchableOpacity style={styles.plbt} onPress={playSound}>
                    <Ionicons style={styles.plbt} name="play-circle-outline" size={55} color={'white'}/>
                </TouchableOpacity>
                <StyledText style={styles.mono} tw="mt-1">{props.tm}</StyledText>
            </View>
            <View style={styles.colinfo}>
                <StyledText style={styles.nm} tw="font-bold text-3xl">{props.nm}</StyledText>
                <TouchableOpacity onPress={handleFindAccount}>
                    <StyledText style={styles.auth}>{props.auth}</StyledText>
                </TouchableOpacity>
            </View>
            <View style={styles.icons}>
                <TouchableOpacity onPress={handleLiked}>
                    <Ionicons name={isLiked ? 'heart' : 'heart-outline'} size={28} color={isLiked ? 'red' : 'white'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDownload}>
                    <Ionicons style={styles.download} name={isDownloaded ? 'checkmark-outline' : 'arrow-down-outline'} size={28} color={isDownloaded ? 'green' : 'white'} />
                </TouchableOpacity>
            </View>
        </StyledView>
    )
}


/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
    nm: {
        fontSize: 25,
        fontFamily: 'Syne',
        fontWeight: 600,
        color: 'white',
    },
    auth: {
        fontFamily: 'Urbanist',
        color: 'white',
    },
    container: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 0,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: '#1c1917',
        marginVertical: 8,
        paddingBottom: 8,
    },
    colinfo: {
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 'auto',
    },
    colplay: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    mono: {
        fontFamily: "Urbanist",
        color: 'lightgray',
        marginTop: 0,

    },
    plbt: {
        paddingLeft: 2,
    },
    download: {
        paddingRight: 15,
        marginLeft: 10,
    },
    icons: {
        flexDirection: 'row',
    },
});

export default Sound;