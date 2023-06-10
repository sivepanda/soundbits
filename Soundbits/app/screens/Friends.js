import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';
import NavBar from '../components/Nav';
import Title from '../components/Title';
import Homies from '../components/Homies';



const Friends = () => {
    const navigation = useNavigation(); 
    const StyledTO = styled(TouchableOpacity);
    const StyledView = styled(View);
    const StyledText = styled(Text);
    const StyledTitle = styled(Title);

    function callDaHomies(i) {
        var ret;
        for(var c = 0; c < i; c++) {
            ret += <Homies />
        }
        return ret;
    }

    return (
        <StyledView style={styles.container} tw='h-[100vh] w-[100vw] mt-[-5vh]' >
             <StyledView tw="mt-[-90vh]" style={styles.head}>
                <StyledTitle tm="Friends" />
            </StyledView>
             
             {/* -------------------------------------------------------------------------- */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
                <Homies />
            </ScrollView>
             

             <StyledView style={ styles.bott }>
                <NavBar navigation={navigation} activeTab="Accounts" />
            </StyledView>
        </StyledView>
    )    
}

const styles = StyleSheet.create({
    container: {
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

export default withExpoSnack(Friends);