import React from 'react';
import { StyleSheet, View } from 'react-native';

import Heading from './heading'
import Body from './body'

const defaultScreen = () => (
    <View style={styles.container}>
      <Heading />
      <Body />
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default defaultScreen;