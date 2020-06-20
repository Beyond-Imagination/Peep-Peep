import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { signUpApi } from '../../api/user'

export default class SignUpScreen extends Component{

    constructor(){
        super();
        this.state = {email :"", password : "", nickname : ""};
    }
    
    static navigationOptions = {
        header: null,
    };

    _goLogin(){
        this.props.navigation.replace('SignIn')
    }

    _doSignUp = () => {
        let props = this.props;
        let body = {
            email: this.state.email,
            password: this.state.password,
            nickname: this.state.nickname
        };
        signUpApi(body)
            .then(function (response) {
                    console.log("success", response);
                    props.navigation.replace('TabNavigator')
                })
            .catch(function (error) {
                    console.log("error", error);
                })
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Peep Peep</Text>
                </View>
                <View style={styles.formArea}>
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"email"}
                        onChangeText = {(email)=>this.setState({email})}/>
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"Password"}
                        onChangeText = {(password)=>this.setState({password})}/>
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"Nickname"}
                        onChangeText = {(nickname)=>this.setState({nickname})}/>
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this._doSignUp.bind(this)}>
                        <Text style={styles.buttonTitle}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this._goLogin.bind(this)}>
                        <Text style={styles.buttonTitle}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: wp('10%'),
        paddingRight: wp('10%'),
        justifyContent: 'center',
    },
    titleArea: {
        width: '100%',
        padding: wp('10%'),
        alignItems: 'center',
    },
    title: {
        fontSize: wp('10%'),
    },
    formArea: {
        width: '100%',
        paddingBottom: wp('10%'),
    },
    textForm: {
        borderWidth: 0.5,
        borderColor: '#888',
        width: '100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
    },
    buttonArea: {
        width: '100%',
        height: hp('5%'),
        flexDirection: 'row',
    },
    button: {
        backgroundColor: "#ffe277",
        width: "40%",
        height: "100%",
        margin: "5%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: 'white',
    },
})
