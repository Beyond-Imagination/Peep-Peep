import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Heading from './component/heading'
import Body from './component/body'

export default function App() {
  return (
    <View style={styles.container}>
      <Heading />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
