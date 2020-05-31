import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const heading = () => (
    <View style={styles.heading}>
        <Text>Peep Peep</Text>
    </View>
)

const styles = StyleSheet.create({
    heading: {
        flex: 1,
        width: "100%",
        backgroundColor: '#ffe277',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default heading;