import React, {Component} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'

import PeepPosting from './peep_posting'

import { peepGetApi } from '../../../api/peep'

export default class Feed extends Component{
    constructor(){
        super();
        this.state = {peeps: []};
    }

    componentDidMount() {
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
            subtitle={item.postedBy.nickname}
            bottomDivider
        />
    )

    render(){
        return (
            <View style={{flex: 1}}>
                <PeepPosting style={styles.peepPosting}></PeepPosting>
                <FlatList
                    style={{flex: 8}}
                    data={this.state.peeps}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    peepPosting: {
        flex: 1,
        flexDirection: 'row'
    }
});
