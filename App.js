import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash } from './src/screens/splash.js';
import { Home } from './src/screens/home';
import { History } from './src/screens/history';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="History" component={History} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
