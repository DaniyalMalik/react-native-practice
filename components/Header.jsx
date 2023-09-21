import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
});