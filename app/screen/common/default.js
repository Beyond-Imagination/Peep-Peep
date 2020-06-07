import React from 'react';
import { StyleSheet, View } from 'react-native';

import Head from './head'
import Body from './body'

// TODO: laggu - 추후 defaultSceen 이름 수정
const defaultScreen = () => (
    <View style={{flex: 1}}>
        <Head style={styles.head}/>
        <Body style={styles.body}/>
    </View>
)

const styles = StyleSheet.create({
    head: {
        flex: 1,
        backgroundColor: '#ffe277',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 9,
        backgroundColor: '#fff',
    },
});
  
export default defaultScreen;
