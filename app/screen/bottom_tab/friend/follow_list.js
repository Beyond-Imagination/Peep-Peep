import React, {Component} from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'

export default class FollowList extends Component{
    constructor(props){
        super(props);
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
                    data={this.props.follow}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        )
    }
}
