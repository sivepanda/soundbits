import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { useFonts } from 'expo-font';

import Axios from 'axios';
import * as Random from 'expo-random';

var bcrypt = require('react-native-bcrypt');

bcrypt.setRandomFallback((len) => {
    const buf = new Uint8Array(len);
    console.log("set");
    return buf.map(() => Math.floor(Random.getRandomBytes(1)[0] * 256));
});

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [usernameError, setUsernameError] = useState(null);
  
    const StyledText = styled(Text);

    const handleSignUp = () => {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) { //hash new password and post it to db
                Axios.post("http://ec2-18-212-20-211.compute-1.amazonaws.com:3000/users", {
                    username: username,
                    email: email,
                    userPassword: hash,
                    profilePicture: "https://i1.sndcdn.com/artworks-000048236823-jshou5-t500x500.jpg", //default pfp
                    numLikes: 0,
                    numPosts: 0,
                    numFriends: 0,
                }).then(async (e) => {
                    console.log(e);
                    // await SecureStore.setItemAsync("uID", String(e.data));
                    navigation.navigate('Home', {})
                })
                .catch(e => {
                    console.log(e);
                    return e;
                });
            });
        });
        
    };

    const handleUsernameChange = (text) => {
        setUsername(text);
        // Check if username already exists
        if (text === 'existingusername') {
            setUsernameError('Username already exists');
        } else {
            setUsernameError(null);
        }
    };

    /* ------------------------------------------------------------------------------ */
    /*     Returns 4 input text boxes that allows for the user to create an account   */
    /* ------------------------------------------------------------------------------ */

    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/bits.png')}
                style={styles.logo}
            />

            <StyledText tw='text-white text-3xl'>Soundbits</StyledText>

            <View style={styles.inputContainer}>
                <TextInput
                    /* ---------------------------  Username --------------------------- */
                    style={styles.input}
                    placeholder='Username'
                    onChangeText={handleUsernameChange}
                    value={username}
                />
                {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}
                <TextInput
                    /* ------------------------------ Set the Email ----------------------------- */
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType='email-address'
                />
                <TextInput
                    /* ---------------------------- Set the Password ---------------------------- */
                    style={styles.input}
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                />
                <TextInput
                    /* -------------------------- Confirm the Password -------------------------- */
                    style={styles.input}
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    secureTextEntry={true}
                />
            </View>

            {/* --------------------------- Handle the Sign-up --------------------------- */}
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};


/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 50,
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
        marginTop: 10,
    },
    input: {
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007AFF',
        borderRadius: 5,
        height: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    errorText: {
        color: '#ff0000',
        marginBottom: 10,
    },
});

export default withExpoSnack(SignUp);
