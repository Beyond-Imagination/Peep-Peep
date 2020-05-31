import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const feed = () => (
    <View style={styles.body}>
        <Text>Feed tab</Text>
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

export default feed;
