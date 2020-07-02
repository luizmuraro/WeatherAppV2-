import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Detail = () => {
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>Detail</Text>
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

export default Detail;