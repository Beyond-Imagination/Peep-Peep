import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Head = () => (
    <View style={styles.head}>
        <Text>Peep Peep</Text>
    </View>
)

const styles = StyleSheet.create({
    head: {
        flex: 1,
        width: "100%",
        backgroundColor: '#ffe277',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Head;
