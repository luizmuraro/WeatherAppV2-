import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
    return (

        <LinearGradient colors={['rgb(102,197,255)', 'rgb(21,128,253)']} style={styles.container}>
            <Header />
            <View style={styles.main}>
                <Image style={{ width: 160, height: 160 }} source={require('../../assets/sunny/imageSunny.png')} />
                <Text>Sunny</Text>
                <Text>22ºC</Text>
                <View style={styles.minMax}>
                    <Text>24º</Text>
                    <Text>18º</Text>
                </View>
                <View style={styles.weatherConditions}>
                    <Text>50%</Text>
                    <Text>2km/h</Text>
                    <Text>20mm</Text>
                </View>
                <Text>Divider</Text>

                <View style={styles.footer}>
                    <Image style={{ width: 40, height: 40 }} source={require('../../assets/sunny/imageSunny.png')} />
                    <View>
                        <Text>Tomorrow</Text>
                        <View style={styles.tomorrowMinMax}>
                            <Text>24º</Text>
                            <Text>18º</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text>See the full week</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(102, 197, 255)'
    },
    main: {
        alignItems: 'center'
    },
    minMax: {
        flexDirection: 'row'
    },
    weatherConditions: {
        flexDirection: 'row'
    },
    footer: {
        flexDirection: 'row'
    },
    tomorrowMinMax: {
        flexDirection: 'row'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home;
