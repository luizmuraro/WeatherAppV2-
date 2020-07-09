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
        height: 100,
    },
    icon: {
        height: 18.2,
        width: 93.6,
    },

})

export default Header;