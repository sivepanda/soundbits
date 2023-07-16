import React from 'react';
import { useCallback } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Dimensions} from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

const StyledView = styled(View);
const StyledText = styled(Text);
const { width, height } = Dimensions.get('window');

/* Easy-to-use title component, dynamically populated with props */

const Title = (props) => {
    const [fontsLoaded] = useFonts({
        'Syne': require('../assets/fonts/Syne-SemiBold.ttf'),
        'Urbanist': require('../assets/fonts/Urbanist-Regular.ttf'),
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

    const y = props;
    return (
        <StyledView style={styles.header} >
            <LinearGradient colors={['rgb(75, 71, 196)', 'transparent']} style={styles.header} /> 
            <StyledText tw="mt-[5vh] ml-[7vw] color-white" style={styles.username}>{y.tm}</StyledText>
        </StyledView>
    );
};


/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 0,
        width: width,
        height: height * .15,
        backgroundColor: 'black',
    },
    username: {
        paddingTop: 40,
        fontFamily: 'Syne',
        fontSize: 40,
        fontWeight: 'bold',
        position: 'absolute',
    },
});

export default Title;