import React , {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';


const Home = () => {

    const [currentCondition, setCurrentCondition] = useState("");
    const [currentTemp, setCurrentTemp] = useState(0);
    const [currentHumidity, setCurrentHumidity] = useState(0);
    const [currentWind, setCurrentWind] = useState(0);
    const [currentPrecipitation, setCurrentPrecipitation] = useState(0);
    const [todayForecast, setTodayForecast] = useState(0);
    const [tomorrowForecast, setTomorrowForecast] = useState(0);

    useEffect(() => {
        async function getPositionAndForecast() {
            await Geolocation.getCurrentPosition (info => {
                const {latitude, longitude} = info.coords;

                axios.get(`http://api.weatherapi.com/v1/forecast.json?key=bcb8eece729c406b820220103200707&q=${latitude},${longitude}&days=7`).then(response => {
                    setCurrentTemp(response.data.current.temp_c);
                    setCurrentCondition(response.data.current.condition.text);
                    setCurrentHumidity(response.data.current.humidity);
                    setCurrentWind(response.data.current.wind_kph);
                    setCurrentPrecipitation(response.data.current.precip_mm);
                    setTodayForecast(response.data.forecast.forecastday[0].day);
                    setTomorrowForecast(response.data.forecast.forecastday[0].day);
                })
            })

        }
        getPositionAndForecast()
        
    }, []);

    return (

        <LinearGradient colors={['rgb(102,197,255)', 'rgb(21,128,253)']} style={styles.container}>
            <Header />
            <View style={styles.main}>
                <Image style={styles.mainImage} source={require('../../assets/images/sunny/imageSunny.png')} />
                <Text style={styles.littleText}>{currentCondition}</Text>
                <View style={styles.temp}>
                        <Text style={styles.temperature}>{currentTemp}</Text>
                    <Text style={styles.tempCelcius}>°C</Text>

                </View>
                <View style={styles.minMax}>
                    <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                    <Text style={styles.littleText}>{todayForecast.maxtemp_c}º</Text>
                    <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                    <Text style={styles.littleText}>{todayForecast.mintemp_c}º</Text>
                </View>
                <View style={styles.weatherConditions}>
                    <View style={styles.weatherItems}>
                        <Image source={require('../../assets/icons/humidity/icHumidity24Px.png')} />
                        <Text style={styles.weatherText}>{currentHumidity}%</Text>
                    </View>
                    <View style={styles.weatherItems}>
                        <Image source={require('../../assets/icons/wind/icWind24Px.png')} />
                        <Text style={styles.weatherText}>{currentWind} km/h</Text>
                    </View>
                    <View style={styles.weatherItems}>
                        <Image source={require('../../assets/icons/precipitation/icPrecipitation24Px.png')} />
                        <Text style={styles.weatherText}>{currentPrecipitation} mm</Text>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.footer}>
                    <Image style={styles.tomorrowImage} source={require('../../assets/images/sunny/imageSunny.png')} />
                    <View style={styles.tomorrowText}>
                        <Text style={styles.littleText}> Tomorrow</Text>
                        <View style={styles.tomorrowMinMax}>
                            <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                            <Text style={styles.littleText}>{tomorrowForecast.maxtemp_c}º</Text>

                            <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                            <Text style={styles.littleText}>{tomorrowForecast.mintemp_c}º</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText}>See the full week</Text>
                            <Image style={styles.buttonIcon} source={require('../../assets/icons/arrowRight/icArrowright24Px.png')} />
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
        fontFamily: 'Averta-Semibold',
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
        width: 184,
        height: 40,
        borderRadius: 16,
        backgroundColor: 'rgba(255,255,255,0.24)',
        marginLeft: 24.8

    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)',
        
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
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)',
        marginRight: 9.6,
        textTransform: 'capitalize'
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
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)',
        alignSelf: 'center',
        // backgroundColor: 'red',
    },

    tempCelcius: {
        fontSize: 24,
        fontFamily: 'Averta-Semibold',
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
