import React from 'react';
import { StyleSheet, View } from 'react-native';

import Head from './head'
import Body from './body'

// TODO: laggu - 추후 defaultSceen 이름 수정
const defaultScreen = () => (
    <View >
      <Head style={styles.head}/>
      <Body style={styles.body}/>
    </View>
)

// TODO: laggu - flex 레이아웃 문제 수정, head body 비율 맞추기
const styles = StyleSheet.create({
    head: {
        flex: 1,
        width: "100%",
        backgroundColor: '#ffe277',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
  
export default defaultScreen;
