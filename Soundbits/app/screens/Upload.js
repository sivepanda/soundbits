import React, { useState } from 'react';
<<<<<<< HEAD
// import { View, Text, Image, StyleSheet } from 'react-native';
=======
import { View, Text,TouchableOpacity, Image, StyleSheet } from 'react-native';
>>>>>>> d7a459f368cbe1ef93dc7f54e0b060af8e4cd54b
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';
import NavBar from '../components/Nav';
// import { Ionicons } from '@expo/vector-icons';
import Title from '../components/Title';

<<<<<<< HEAD
import ReactDOM from 'react-dom/client';

import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';


const Upload = () => {

    
    const [currency, setCurrency] = useState('US Dollar');
    const navigation = useNavigation(); 
    return (
      <View >
        <Text > Demo Form </Text>
        <View style={styles.overall} >
          <TextInput 
            placeholder="Email" />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
          />
          <Picker
            selectedValue={currency}
            onValueChange={currentCurrency => setCurrency(currentCurrency)}>
            <Picker.Item label="USD" value="US Dollars" />
            <Picker.Item label="EUR" value="Euro" />
            <Picker.Item label="NGN" value="Naira" />
          </Picker>
          <Text>
            Selected: {currency}
          </Text>
        </View>
      </View>
    );
=======
/* -------------- Allow the user to upload their own SoundBits! ------------- */
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

            <TouchableOpacity style={styles.download}>
                <Ionicons name="download-outline" size={28} color={'#fff'} />

                <StyledText tw="text-lg text-stone-300">Saved Bits</StyledText>
            </TouchableOpacity>
>>>>>>> d7a459f368cbe1ef93dc7f54e0b060af8e4cd54b

            <StyledView tw='mt-[51vh]' style={{ marginTop: 'auto' }}>
                <NavBar navigation={navigation} activeTab="Accounts"/>
              </StyledView>
        </StyledView>
    )    
}



const styles = StyleSheet.create({

<<<<<<< HEAD
    overall: {
        display: 'grid',
        gridrow: "20vh 20vh 20vh 20vh",
=======
    download: {
        marginTop: '40%',
        flexDirection: 'column',
        backgroundColor: 'grey',
        borderRadius: '10px',
        width: '45%',
        height: '20%',
        justifyContent: 'center',
    
        alignItems: 'center',
    },



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
>>>>>>> d7a459f368cbe1ef93dc7f54e0b060af8e4cd54b
    },

});

export default withExpoSnack(Upload);