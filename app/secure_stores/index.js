import {AsyncStorage} from 'react-native';

export const setToken = async (token) => {
    console.log("set token to secure store", token)
    await AsyncStorage.setItem('secure_token', token);
};

export const getToken = async () => {
    console.log("get token from secure store")
    return await AsyncStorage.getItem('secure_token');
};
