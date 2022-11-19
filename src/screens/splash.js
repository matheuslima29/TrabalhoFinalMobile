import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export const Splash = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} style='dark'/>
            <Text style={styles.title}>Find your Gadget</Text>
            <Image style={styles.logo} source={require('../media/logo.png')} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Get started</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#5956E9'
    },
    logo: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    title: {
        fontSize: 60,
        marginTop: 50,
        fontWeight: '700',
        fontStyle: 'Raleway',
        color: '#FFFFFF'
    },
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowRadius: 5,
        paddingVertical: 15,
        marginTop: 30,
        alignItems: 'center',
        width: '80%',

    },
    buttonText: {
        fontSize: 18,
        fontWeight: '700',
        fontStyle: 'Raleway',
        color: '#5956E9'
    }
});