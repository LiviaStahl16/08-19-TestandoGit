import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {styles} from './styles';
import { StackNavigatorParamList } from '../../../types';


type HomeProps = NativeStackNavigationProp<StackNavigatorParamList, "Home">;

const Login = () => {

    const navigation = useNavigation<HomeProps>();

    function irParaTelaHome(){
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Facebook</Text>
            <View style={styles.logoContainer}>

                <Image
                    style={styles.logo}
                    source={require("../../assets/face.png")
                    } />
            </View>

            <View style={styles.formContainer}>

                <TextInput
                    placeholder="Email"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    style={styles.input}
                />

                <TouchableOpacity style={styles.buttonContainer} onPress={irParaTelaHome}>
                    <Text style={styles.buttonText}>Log In </Text>
                </TouchableOpacity>
            </View>

            <Text
                style={styles.link}
                onPress={() => { Linking.openURL('https://facebook.com'); }}>
                Sign Up for Facebook</Text>
        </View>
    );
}


export default Login;