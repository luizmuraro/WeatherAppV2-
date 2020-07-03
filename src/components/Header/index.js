import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}> 
            <Image source={require('../../assets/logo.png')} style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 72.8,
    },
    icon: {
        height: 18.2,
        width: 101.4,
        marginTop: 21,
        marginBottom: 21,
    },

})

export default Header;