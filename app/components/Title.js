import React from 'react';
import { useCallback } from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const StyledView = styled(View);
const StyledText = styled(Text);

/* Easy-to-use title component */

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
        <StyledView tw="w-[100vw] h-[15vh] bg-indigo-900" style={styles.header}>
            <StyledText tw="mt-[5vh] ml-[7vw] color-white" style={styles.username}>{y.tm}</StyledText>
        </StyledView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 40
    },
    username: {
        fontFamily: 'Syne',
        fontSize: 40,
        fontWeight: 'bold'
    },
});

export default Title;