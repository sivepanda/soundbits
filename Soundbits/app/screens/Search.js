import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { uniqueNamesGenerator, adjectives, names, colors, animals } from 'unique-names-generator';

import { Ionicons } from '@expo/vector-icons';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';
import NavBar from '../components/Nav';
import Title from '../components/Title';
import Sound from '../components/Sound';

const config = {
    dictionaries: [names],
    style: 'capital'
}

const config_D = {
    dictionaries: [adjectives],
    style: 'capital'
}

function randNum() {
    var min = Math.floor(Math.random() * 4) + 2;
    var sec = Math.floor(Math.random() * 60);
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    return min + ":" + sec;
}

const Upload = () => {
    const navigation = useNavigation(); 
    const StyledTO = styled(TouchableOpacity);
    const StyledView = styled(View);
    const StyledText = styled(Text);
    const StyledTitle = styled(Title);
    const StyledIcon = styled(Ionicons);

    return (
        <StyledView tw='h-[100vh] w-[100vw] mt-[-5vh]' style = {styles.overall}>
             <StyledView tw="mt-[-90vh]" style={styles.head}>
                <StyledTitle tm="Search" />
            </StyledView>
            

            <StyledView style={styles.box} tw="rounded-3xl h-[4vh] w-[90vw] mb-6 bg-gray-100 shadow-sm">
                {/* <View style={styles.colplay}> */}
                    <StyledIcon tw='ml-[2vw] mt-[0.8vh]' name="search-outline" size={20} />
                    <StyledText style={styles.mono} tw="ml-4 mt-[0.8vh] color-gray-400">search</StyledText>
                {/* </View> */}
                
            </StyledView>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>
                <Sound tm={ randNum() } nm={ uniqueNamesGenerator(config_D) } auth={uniqueNamesGenerator(config) + " " + uniqueNamesGenerator(config)}/>

            </ScrollView>

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
    box: {
        // backgroundColor: 'green',
        alignContent: 'stretch',
        flexDirection: 'row',
    },
    head: {
        marginTop: 0,
        paddingTop:0,
    },

});

export default withExpoSnack(Upload);