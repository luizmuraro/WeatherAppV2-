import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../components/Header';

const Week = () => {

    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <LinearGradient colors={['rgb(102,197,255)','rgb(21,128,253)']} style={styles.container}> 
        <Header />
            <TouchableOpacity onPress={handleNavigateBack}>
                <Image source={require('../../assets/icons/arrowRight/icArrowright24Px.png')} />
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {

    }
})

export default Week;