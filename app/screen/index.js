import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Head from './common/head'

import SignInScreen from './signin';
import SignUpScreen from './signup';
import TabNavigator from './bottom_tab';

const Stack = createStackNavigator();

const body = () => (
    <View style={{flex: 1}}>
        <Head style={styles.head}/>
        <View style={styles.body}>
            <NavigationContainer >
                <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="TabNavigator" component={TabNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    </View>
)

const styles = StyleSheet.create({
    head: {
        flex: 1,
        backgroundColor: '#ffe277',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 9,
        backgroundColor: '#fff',
    },
});

export default body;
