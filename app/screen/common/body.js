import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedScreen from '../feed'
import FriendScreen from '../friend'
import SettingScreen from '../setting'

const Tab = createBottomTabNavigator();

const body = () => (
    <NavigationContainer >
        <Tab.Navigator >
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Friend" component={FriendScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
    </NavigationContainer>
)

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default body;
