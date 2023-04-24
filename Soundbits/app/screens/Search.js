import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
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
    
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log(`Search for "${searchText}"`);
    }

    return (
        <StyledView tw='h-[100vh] w-[100vw] mt-[-5vh]' style = {styles.overall}>
             <StyledView tw="mt-[-90vh]" style={styles.head}>
                <StyledTitle tm="Search" />
            </StyledView>
            

            <StyledView style={styles.box}>
                {/* <View style={styles.colplay}> */}
                    <StyledIcon style={styles.searchBar} name="search-outline" size={20} />
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        value={searchText}
                        onChangeText={setSearchText}
                        onSubmitEditing={handleSearch}
                    />
                {/* </View> */}
            </StyledView>

            <View style={styles.sounds}></View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.sounds}>
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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 25,
        width: '80%',

    },
    head: {
        marginTop: 0,
        paddingTop:0,
    },
    searchBar: {
        alignSelf: 'auto',
        marginRight: 5
    },
    sounds: {
        paddingTop: 15
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 18,
      },
});

export default withExpoSnack(Upload);