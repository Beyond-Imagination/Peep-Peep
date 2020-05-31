import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const body = () => (
    <View style={styles.body}>
        <Text>This is body part</Text>
    </View>
)

const styles = StyleSheet.create({
    body: {
        flex: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default body;