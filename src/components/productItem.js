import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
} from 'react-native';


export const ProductItem = ({ name, description, price }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={require('../media/apple_watch.png')} />
            <View style={styles.description}>
                <Text style={styles.titleName}>{name}</Text>
                <Text style={styles.titleDescription}>{description}</Text>
                <Text style={styles.titlePrice}>$ {price}</Text>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 3,
        backgroundColor: '#FFF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    infos: {
        flexDirection: 'column',
    },
    title: {
        fontSize: 24,
        marginVertical: 2,
        fontWeight: '600',
        fontStyle: 'Raleway',
    },
    titleName: {
        fontSize: 20,
        marginVertical: 2,
        fontWeight: '700',
        fontStyle: 'Raleway',
    },
    titleDescription: {
        fontSize: 15,
        marginVertical: 2,
        fontWeight: '400',
        fontStyle: 'Raleway',
    },
    titlePrice: {
        fontSize: 15,
        fontWeight: '700',
        fontStyle: 'Raleway',
        color: '#5956E9'
    },
    avatar: {
        width: '30%',
        height: undefined,
        aspectRatio: 1,
        marginVertical: 15,
        borderRadius: 100
    },
    description: {
        padding: 3
    },
});