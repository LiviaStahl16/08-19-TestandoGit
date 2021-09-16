import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const Login = () => {
    return(
            <View style={styles.container}>
            <Text style={styles.title}>Facebook</Text>
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require("../../assets/face.png")
                    }/>
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

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Log In </Text>
                </TouchableOpacity>    
            </View>
            <Text style={styles.link}>Sign Up for Facebook</Text>
        </View>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4369B0",
    },

    logoContainer:{
        alignItems: "center",
        justifyContent: "center",
        marginRight: 320,
        
    },

    logo:{
        width: 50,
        height: 50,
        marginTop: 10
    },

    formContainer:{
        padding: 20,
        marginTop: 60
    },

    title:{
        color: "white",
        textAlign: "center",
        fontSize: 50,
        paddingTop: 190
    },

    input:{
        
        height: 50,
        backgroundColor: "white",
        marginBottom: 30,
        paddingHorizontal: 10
    },

    buttonContainer:{
        height: 50,
        backgroundColor: "#213873",
    },

    buttonText:{
        textAlign: "center",
        color: "white",
        fontSize: 25,
        marginTop: 7,

    },

    link:{
        color: "white",
        textAlign: "center",
        padding: 80
    }
});


export default Login;