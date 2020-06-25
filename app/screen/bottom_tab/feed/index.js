import React, {Component} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'

import { peepGetApi } from '../../../api/peep'

export default class Feed extends Component{
    constructor(){
        super();
        this.state = {peeps: []};
    }

    componentDidMount() {
        let feedComponent = this
        peepGetApi()
            .then((response) => {
                console.log("success", response);
                this.setState({peeps: response.data})
            })
            .catch(function (error) {
                console.log("error", error);
            })
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            title={item.content}
        />
    )

    render(){
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.peeps}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
