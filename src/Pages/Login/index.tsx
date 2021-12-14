//Alunos: Livia Stahl e Larissa Kuramoto (1029)

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
            <Text style={styles.title}>Spotify</Text>
            <View style={styles.logoContainer}>

                <Image
                    style={styles.logo}
                    source={require("../../assets/spotify.png")
                    } />
            </View>

            <View style={styles.formContainer}>

            <Text style={styles.frase}>Música para todos.</Text> 

                <TextInput
                    placeholder="E-mail ou nome de usuário"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Senha"
                    secureTextEntry
                    style={styles.input}
                />

                <TouchableOpacity style={styles.buttonContainer} onPress={irParaTelaHome}>
                    <Text style={styles.buttonText}>Entrar </Text>
                </TouchableOpacity>
            </View>

            <Text
                style={styles.link}
                onPress={() => { Linking.openURL('https://facebook.com'); }}>
                Entrar com Facebook</Text>

                <Text
                style={styles.new}
                onPress={() => { Linking.openURL('https://spotify.com'); }}>
                NÃO TEM UMA CONTA? INSCREVA-SE</Text>

        </View>
    );
}




export default Login;