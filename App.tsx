import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Routes from './src/routes';

export default function App() {
    return (
        <view style={styles.container}>
            <Routes/>
        </view>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});