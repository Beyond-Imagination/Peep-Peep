import React, {Component} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'

import { getUserApi } from '../../../api/user'

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

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            title={item.nickname}
        />
    )

    render(){
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.followers}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        )
    }
}
