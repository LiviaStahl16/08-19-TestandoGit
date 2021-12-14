import React from "react";
import { StyleSheet } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },

    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 210

    },

    logo: {
        width: 50,
        height: 50,
        marginTop: -50
    },

    formContainer: {
        padding: 20,
        marginTop: 20
    },

    title: {
        color: "white",
        textAlign: "center",
        fontSize: 40,
        paddingTop: 190,
        fontWeight: "bold"
    },

    input: {

        height: 50,
        backgroundColor: "white",
        marginBottom: 30,
        paddingHorizontal: 10
    },

    buttonContainer: {
        height: 50,
        backgroundColor: "green",
        borderRadius: 20
    },

    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        marginTop: 12,
        fontWeight: "bold",
    },

    linkC: {
        
    },

    link: {
        color: "white",
        height: 50,
        marginTop: 12,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#213873",
        textAlign: "center",
        padding: 20,
        textDecorationLine: "underline"
    },

    frase: {
        color: "white",
        fontSize: 35,
        textAlign: "center",
        marginBottom: 30,
        fontWeight: "bold"
    }, 

    new: {
        color: "gray",
        marginTop: 30,
        textAlign: "center",
        textDecorationLine: "underline"
    },
});