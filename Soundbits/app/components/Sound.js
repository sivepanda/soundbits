import React, { useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Button, Image} from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';


const StyledText = styled(Text);
const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledButton = styled(Button);


const Sound = (props) => {

  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true);
  }
  
  const [sound, setSound] = React.useState();

    async function playSound() {
      sound ? await sound.unloadAsync() : null;
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/meta.mp3')
      );
      Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
      });
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync();
    }
  
    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);  

    return(
        
        <StyledView style={styles.box} tw="rounded-xl h-[9vh] w-[90vw] mb-6 bg-gray-400 shadow-sm">
            <View style={styles.colplay}>
            
                <TouchableOpacity style={styles.plbt} onPress={playSound}>
                    <StyledImage style={styles.plbt} source={require('../assets/play-button.png')} tw='bg-contain ml-4 w-[5vh] h-[5vh]'/>
                </TouchableOpacity>
                <StyledText style={styles.mono} tw="mt-1 ml-4">{props.tm}</StyledText>
            </View>
            <View style={styles.colinfo}>
                <StyledText tw="font-bold text-3xl">{props.nm}</StyledText>
                <StyledText>{props.auth}</StyledText>
            </View>
            <View>
              <TouchableOpacity onPress={handleDownload}>
                <Ionicons style={styles.download} name={isDownloaded ? 'checkmark-outline' : 'arrow-down-outline'} size={28} color={isDownloaded ? 'green' : 'black'}/>
              </TouchableOpacity>
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
    justifyContent: 'space-between',
  },
  colinfo: {
    flexDirection:'column',
    marginLeft: 20,
    marginRight: 'auto',
  }, 
  colplay: {
    flexDirection:'column',
    alignItems:'center'
    // marginLeft: 10
  }, 
  mono: {
    fontFamily: "Courier New"
  },
  download: {
    paddingRight: 15
  },

});

export default Sound;