import React, {Component} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { getUserApi } from '../../../api/user'

import FollowList from './follow_list'

const Tab = createMaterialTopTabNavigator();

export default class Friend extends Component{
    constructor(){
        super();
        this.state = {followings: [], followers: []};
    }

    componentDidMount() {
        getUserApi()
            .then((response) => {
                this.setState({followings: response.data.followings, followers: response.data.followers})
            })
            .catch(function (error) {
                console.log("error", error);
            })
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <Tab.Navigator>
                    <Tab.Screen name="Followings" component={()=><FollowList follow={this.state.followings} />} />
                    <Tab.Screen name="Followers" component={()=><FollowList follow={this.state.followers} />} />
                </Tab.Navigator>
            </View>
        )
    }
}
