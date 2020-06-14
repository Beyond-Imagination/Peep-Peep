import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SignInScreen = () => (
  <View style={styles.container}>
    <Text>sign in</Text>
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
  
export default SignInScreen;
