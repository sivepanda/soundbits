import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';
import NavBar from '../components/Nav';
import Title from '../components/Title';


const Upload = () => {
    const navigation = useNavigation(); 
    const StyledTO = styled(TouchableOpacity);
    const StyledView = styled(View);
    const StyledText = styled(Text);
    const StyledTitle = styled(Title);

    return (
        <StyledView tw='h-[100vh] w-[100vw] mt-[-5vh]' style = {styles.overall}>
             <StyledView tw="mt-[-90vh]" style={styles.head}>
                <StyledTitle tm="Upload" />
            </StyledView>
            <StyledTO  onPress={() => navigation.navigate('Upload', {})} style={ styles.up}>
                <Ionicons name="add-circle-outline" size={100} color={'#fff'} />
            </StyledTO>
            <StyledText tw='text-2xl color-white'>Upload Now!</StyledText>

            <StyledView tw='mt-[51vh]' style={{ marginTop: 'auto' }}>
                <NavBar navigation={navigation} activeTab="Accounts"/>
              </StyledView>
        </StyledView>
    )    
}

const styles = StyleSheet.create({

    overall: {
        flex: 1,
        marginTop: 0,
        flexDirection: 'column',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent:'flex-end'


    },
    head: {
        marginTop: 0,
        paddingTop:0,
    },

});

export default withExpoSnack(Upload);