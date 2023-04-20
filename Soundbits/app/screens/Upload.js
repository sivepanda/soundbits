import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';
import NavBar from '../components/Nav';


const Upload = () => {

    const navigation = useNavigation(); 
    const StyledTO = styled(TouchableOpacity);
    const StyledView = styled(View);
    const StyledText = styled(Text);

    return(
        
        <StyledView tw='h-[100vh] w-[100vw] mt-[25vh]' style = {styles.overall}>
            <StyledTO  onPress={() => navigation.navigate('Upload', {})} style={ styles.up}>
                <Ionicons name="add-circle-outline" size={100} color={'#000'} />
            </StyledTO>
            <StyledText tw='text-2xl'>Upload Now!</StyledText>

            <StyledView tw='mt-[51vh]' style={{ flex: 0 }}>
                <NavBar navigation={navigation} activeTab="Accounts"/>
              </StyledView>
        </StyledView>
        
        

    )

    
}

const styles = StyleSheet.create({

    overall: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'


    },
    up: {

    }

});

export default withExpoSnack(Upload);