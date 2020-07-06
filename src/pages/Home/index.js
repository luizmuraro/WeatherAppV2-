import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
    return (

        <LinearGradient colors={['rgb(102,197,255)', 'rgb(21,128,253)']} style={styles.container}>
            <Header />
            <View style={styles.main}>
                <Image style={styles.mainImage} source={require('../../assets/images/sunny/imageSunny.png')} />
                <Text style={styles.littleText}>Sunny</Text>
                <View style={styles.temp}>
                    <Text style={styles.temperature}>22</Text>
                    <Text style={styles.tempCelcius}>°C</Text>

                </View>
                <View style={styles.minMax}>
                    <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                    <Text style={styles.littleText}>24º</Text>
                    <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                    <Text style={styles.littleText}>18º</Text>
                </View>
                <View style={styles.weatherConditions}>
                    <View style={styles.weatherItems}>
                        <Image source={require('../../assets/icons/humidity/icHumidity24Px.png')} />
                        <Text style={styles.weatherText}>50%</Text>
                    </View>
                    <View style={styles.weatherItems}>
                        <Image source={require('../../assets/icons/wind/icWind24Px.png')} />
                        <Text style={styles.weatherText}>2km/h</Text>
                    </View>
                    <View style={styles.weatherItems}>
                        <Image source={require('../../assets/icons/precipitation/icPrecipitation24Px.png')} />
                        <Text style={styles.weatherText}>20mm</Text>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.footer}>
                    <Image style={styles.tomorrowImage} source={require('../../assets/images/sunny/imageSunny.png')} />
                    <View style={styles.tomorrowText}>
                        <Text style={styles.littleText}> Tomorrow</Text>
                        <View style={styles.tomorrowMinMax}>
                            <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                            <Text style={styles.littleText}>24º</Text>

                            <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                            <Text style={styles.littleText}>18º</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}>See the full week</Text>
                            <Image style={styles.buttonIcon} source={require('../../assets/icons/arrowRight/icArrowright24Px.png')} />
                        </View>
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
    },
    main: {
        alignItems: 'center',
        alignSelf: "stretch"
    },
    minMax: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    weatherConditions: {
        flexDirection: 'row',
        marginTop: 70.4,
        alignSelf: 'stretch',
        justifyContent: "space-between",
        paddingHorizontal: 52
    },
    weatherText: {
        fontSize: 16,
        color: 'rgb(255,255,255)'
    },
    weatherItems: {
        alignItems: 'center',
    },
    footer: {

        flexDirection: 'row',
        marginTop: 23,
        alignSelf: 'stretch',

    },
    tomorrowMinMax: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 168,
        height: 40,
        borderRadius: 16,
        backgroundColor: 'rgba(255,255,255,0.24)',
        marginLeft: 24.8

    },
    buttonContent: {
        flexDirection: 'row',
        // marginLeft: 12.8,
        // marginRight: 32,
        // marginVertical: 6.4
        
    },
    buttonText: {
        fontSize: 14,
        color: 'rgb(255,255,255)',
        // marginLeft: 16
        // marginLeft: 12.8,
        // marginVertical: 6.4,
        // width: 89.6,
        // height: 19.2,
    },
    buttonIcon: {
    },
    mainImage: {
        width: 160,
        height: 160,
        marginTop: 51.2,
        marginBottom: 12.8
    },
    tomorrowImage: {
        width: 40,
        height: 40,
        marginLeft: 19.2
    },
    tomorrowText: {
        marginLeft: 9.6
    },
    littleText: {
        fontSize: 14,
        color: 'rgb(255,255,255)',
        marginRight: 9.6,
    },
    temp: {
        flexDirection: 'row',
        marginTop: 19.2,
        marginBottom: 19.2,
        alignItems: "center",
        marginLeft: 13

    },
    temperature: {
        fontSize: 64,
        color: 'rgb(255,255,255)',
        alignSelf: 'center'
        // backgroundColor: 'red',
    },

    tempCelcius: {
        fontSize: 24,
        color: 'rgb(255,255,255)',
        marginBottom: 27

    },

    divider: {
        marginTop: 47.2,
        borderTopWidth: StyleSheet.hairlineWidth,
        alignSelf: 'stretch',
        borderTopColor: 'rgba(255,255,255,0.24)'
    },
})

export default Home;
