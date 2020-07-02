import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Week = () => {
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>Week</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {

    }
})

export default Week;