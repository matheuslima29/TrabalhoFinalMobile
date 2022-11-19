import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';


export const History = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} style='dark'/>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Ionicons style={styles.backIcon} name="md-arrow-back-sharp" size={35} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Order History</Text>
            </View>
            <View style={styles.body}>
                <Image style={styles.logo} source={require('../media/guy.png')} />
                <Text style={styles.subTitle} >No History yet</Text>
                <Text style={styles.subTitle2}>Hit the orange button down</Text>
                <Text style={styles.subTitle2}>below to Create an order</Text>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Start ordering</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F2F2F2',
        marginHorizontal: 20,
    },
    body: {
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontStyle: 'Raleway',
        fontWeight: '700',
        alignSelf: 'center'
    },
    subTitle: {
        fontSize: 25,
        fontStyle: 'Raleway',
        fontWeight: '700',
        alignSelf: 'center',
        marginVertical: 10
    },
    subTitle2: {
        fontSize: 15,
        fontStyle: 'Raleway',
        fontWeight: '400',
        alignSelf: 'center',
        marginHorizontal: 50,
        color: '#9A9A9D'
    },
    header: {
        marginTop: 50,
        marginBottom: 30
    },
    backIcon: {
        alignSelf: 'flex-start',
        fontWeight: '700',
    },
    logo: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    button: {
        backgroundColor: '#58C0EA',
        borderRadius: 10,
        shadowRadius: 5,
        paddingVertical: 15,
        marginTop: 30,
        alignItems: 'center',
        width: '60%',

    },
    buttonText: {
        fontSize: 15,
        fontWeight: '700',
        fontStyle: 'Raleway',
        color: '#FFF'
    }
});