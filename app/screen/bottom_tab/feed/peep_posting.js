import React, {Component} from 'react';
import { View, TextInput, Button } from 'react-native';
import { Divider } from 'react-native-elements';

import { peepPostApi } from '../../../api/peep'

export default class PeepPosting extends Component{
    constructor(props) {
        super(props);
        this.state = {text: ""};
        this.textInput = React.createRef();
    }

    _peep(){
        let textInput = this.textInput
        let body = {
            content: this.state.text,
        };
        peepPostApi(body)
            .then(function (response) {
                    console.log("success", response);
                    textInput.current.clear()
                })
            .catch(function (error) {
                    console.log("error", error);
                })
    }

    render() {
        return (
            <View style={this.props.style}>
                <TextInput
                    style={{flex: 7, backgroundColor: '#fff',}}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    ref={this.textInput} />
                <Divider style={{ height: 1, backgroundColor: '#ffe277' }} />
                <Button
                    title="Peep"
                    style={{flex: 1}}
                    onPress={this._peep.bind(this)}
                    />
            </View>
        )
    }
}
