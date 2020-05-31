import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const setting = () => (
    <View style={styles.body}>
        <Text>setting tab</Text>
    </View>
)

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default setting;
