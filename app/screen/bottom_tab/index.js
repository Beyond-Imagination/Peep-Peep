import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedScreen from './feed'
import FriendScreen from './friend'
import SettingScreen from './setting'

const Tab = createBottomTabNavigator();

const body = () => (
    <View style={{flex: 1}}>
        <Tab.Navigator >
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Friend" component={FriendScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
    </View>
)

export default body;
