import React, { Component} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Post = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Playlists</Text>
            
        

            <Text style={styles.texto2}>Navegar por todas as seções</Text>

            <View style={styles.containerImagem}>
            <Image style={styles.imagem1} source={require('../../assets/retro.jpg')}></Image>
            <Image style={styles.imagem2} source={require('../../assets/brasil.jpg')}></Image>
            </View>

            <View style={styles.containerImagem2}>
            <Image style={styles.imagem3} source={require('../../assets/podcast.png')}></Image>
            <Image style={styles.imagem4} source={require('../../assets/microfone.jpg')}></Image>
            </View>
            
            </View>
            
        
          
    );

}

export default Post;


const styles = StyleSheet.create({
    container: {
       flex: 1 
    },

    texto: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 45,
        marginLeft: 10
    },

    texto2: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 300,
        marginLeft: 10
    },

    imagem1: {
        width: 180,
        height: 100,
        margin: 10
    
    },

    imagem2: {
        width: 180,
        height: 100,
        margin: 10
    
    },

    containerImagem: {
        flexDirection: "row",

    },

    imagem3: {
        width: 180,
        height: 100,
        margin: 10
    
    },

    imagem4: {
        width: 180,
        height: 100,
        margin: 10
    
    },

    containerImagem2: {
        flexDirection: "row",

    }

});