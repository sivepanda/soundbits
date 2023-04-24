import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';

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

    
}



const styles = StyleSheet.create({

    overall: {
        display: 'grid',
        gridrow: "20vh 20vh 20vh 20vh",
    },

});

export default withExpoSnack(Upload);