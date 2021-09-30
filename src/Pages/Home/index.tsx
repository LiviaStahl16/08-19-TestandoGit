import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {stylesLink, stylesLinkImportantes, styles} from './styles';
import { StackNavigatorParamList } from '../../../types';

import Post from '../Post';

const LinkItem = (props:any)=>{
    return(
        <Text style={stylesLink.text}>{props.name}</Text>
    );
}


const LinksImportantes = ()=>{
    return(//Aqui dentro ficará o nosso JSX
        <View style={stylesLinkImportantes.container}>
            <LinkItem name="Home"/>
            <LinkItem name="Post"/>
            <LinkItem name="Videos"/>
            <LinkItem name="Photos"/>
            <LinkItem name="Community"/>
        </View>
    );
};

type HomeProps = NativeStackNavigationProp<StackNavigatorParamList, "Home">;

const Home = () => {

    const navigation = useNavigation<HomeProps>();

    function irParaTelaLogin(){
        navigation.navigate('Login');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={
                    require("../../assets/arrow-left.png")
                    }>
                </Image>
                <View style={styles.inputTextView}>
                    <Image source={
                        require("../../assets/ei_search.png")
                        }>
                    </Image>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#F5FFFF"
                        style={styles.textInput}
                        >

                    </TextInput>
                </View>
                <Image source={
                    require("../../assets/share.png")
                    }>
                </Image>  
            </View>
            <LinksImportantes />

           { <View style={styles.conteudoFacebook}>
                <TouchableOpacity style={styles.meubotao} onPress={irParaTelaLogin}>
                    <Text style={styles.meuBotaoTexto}>Ir para a segunda tela</Text>
                </TouchableOpacity>

                <StatusBar style="auto"  />
            <ScrollView>
            <Post />
            </ScrollView>
            
                </View>}
                </View>
    );
                }

export default Home;