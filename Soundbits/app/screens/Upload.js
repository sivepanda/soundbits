import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';

const Upload = () => {

    const navigation = useNavigation(); 
    
    return(

        <View style = {styles.overall}>
            <form>
                <label>Enter your name:
                    <input type="text" />
                </label>
            </form>
        </View>
        


    )

    
}

const styles = StyleSheet.create({

    overall: {
        display: 'grid',

    },

});

export default withExpoSnack(Upload);