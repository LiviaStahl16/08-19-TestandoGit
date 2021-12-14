import React from "react";
import { StyleSheet } from "react-native";

export const stylesLink = StyleSheet.create({
    text:{
        //backgroundColor:"red",
        marginTop:10,
        color: 'white',
        fontSize: 13.71,

    }
});

export const stylesLinkImportantes = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal:40,
        paddingVertical:10,

        borderBottomColor:"#F0F0F0",
        borderBottomWidth:1,

    }
});

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "black",
    },
    header:{
        minHeight:93,
        backgroundColor: "green",
        paddingTop:40,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:30,
    },
    inputTextView:{
        flex:1,
        backgroundColor:"white",
        textDecorationColor: "black",
        height:40,
        marginHorizontal:10,
        alignItems: "center",
        borderRadius:28,
        flexDirection:"row"
    },
    textInput:{
        color:"#F5FFFF",
        // maxWidth:200
        flex:1,
        paddingRight:10,
    },

    meubotao:{
        backgroundColor: 'gray',
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10

        
    },

    conteudoFacebook:{
        flex: 1,
       // backgroundColor: "#F0F500",
       paddingTop: 40
    },

    meuBotaoTexto:{
        color: "#F5FFFF"
    }
});
