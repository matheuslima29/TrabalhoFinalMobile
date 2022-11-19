import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { getProducts } from '../api/products';
import { ProductItem } from '../components/productItem';
import Feather from '@expo/vector-icons/Feather';
import { StatusBar } from 'expo-status-bar';

export const Home = ({ navigation }) => {

    const products = getProducts();

    return (
        <View style={styles.container}>
            <StatusBar translucent={true} style='dark'/>
            <TouchableOpacity onPress={() => navigation.navigate('History')}>
                <Feather name="menu" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Order online</Text>
            <Text style={styles.title}>choose the product</Text>
            <TouchableOpacity style={styles.tabButton}>
                <Text style={styles.tabText}>
                    Phones
                </Text>
            </TouchableOpacity>
            <ScrollView>
                {
                    products.map((item, idx) => <ProductItem key={idx} name={item.name} description={item.description} price={item.price} na />)
                }
            </ScrollView>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 30,
        backgroundColor: '#F2F2F2',
        marginHorizontal: 10,
        marginTop: 10
    },
    title: {
        fontSize: 30,
        fontStyle: 'Raleway',
        fontWeight: '700',
    },
    tabButton: {
        alignSelf: 'flex-start',
        marginVertical: 5,
        padding: 5,
        borderBottomWidth: 4,
        borderBottomColor: '#5956E9',
        borderBottomEndRadius: 3,
        borderBottomLeftRadius: 3,
    },
    tabText: {
        color: '#9A9A9D',
    }
});