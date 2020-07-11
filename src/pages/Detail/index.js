import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const Detail = () => {

    const [weekDay, setWeekDay] = useState('');
    const [condition, setCondition] = useState('');
    const [temp, setTemp] = useState('');
    const [maxTemp, setMaxTemp] = useState('');
    const [minTemp, setMinTemp] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');
    const [precipitation, setPrecipitation] = useState('');
    
    const navigation = useNavigation();
    const routes = useRoute();

    useEffect(() => {
        setWeekDay(routes.params.weekDay)
        const { condition ,avgtemp_c, maxtemp_c, mintemp_c, avghumidity, maxwind_kph, totalprecip_mm } = routes.params.dayForecast.day;
        setCondition(condition.text);
        setTemp(avgtemp_c);
        setMaxTemp(maxtemp_c);
        setMinTemp(mintemp_c);
        setHumidity(avghumidity);
        setWind(maxwind_kph);
        setPrecipitation(totalprecip_mm);
    }, []);

    function handleNavigateBack() {
        navigation.goBack();
    }

    const backgroundVariations = {
        'Clear': ['rgb(102,197,255)', 'rgb(21,128,253)'],
        'Sunny': ['rgb(102,197,255)', 'rgb(21,128,253)'],
        'Partly cloudy': ['rgb(102,197,255)', 'rgb(21,128,253)'],
        'Mostly cloudy': ['rgb(102,197,255)', 'rgb(21,128,253)'],
        'Cloudy': ['rgb(104,180,239)', 'rgb(50,90,194)'],
        'Mist': ['rgb(104,180,239)', 'rgb(50,90,194)'],
        'Overcast': ['rgb(104,180,239)', 'rgb(50,90,194)'],
        'Showers': ['rgb(104,180,239)', 'rgb(50,90,194)'],
        'Moderate or heavy rain shower': ['rgb(104,180,239)', 'rgb(50,90,194)'],
        'Light rain': ['rgb(104,180,239)', 'rgb(50,90,194)'],
        'Patchy rain possible': ['rgb(104,180,239)', 'rgb(50,90,194)'],
        'Rain': ['rgb(104,180,239)', 'rgb(50,90,194)'],
        'Thunderstorm': ['rgb(96,134,220)','rgb(39,51,105)'],
        'Thundery outbreaks possible': ['rgb(96,134,220)','rgb(39,51,105)'],
        'Moderate or heavy rain with thunder': ['rgb(96,134,220)','rgb(39,51,105)'],
        
    };
    const imageVariation = {
        'Sunny': require('../../assets/images/sunny/imageSunny.png'),
        'Clear': require('../../assets/images/sunny/imageSunny.png'),
        'Partly cloudy': require('../../assets/images/partlycloudy/imagePartlycloudy.png'),
        'Mostly cloudy': require('../../assets/images/mostlycloudy/imageMostlycloudy.png'),
        'Cloudy': require('../../assets/images/cloudy/imageCloudy.png'),
        'Mist': require('../../assets/images/cloudy/imageCloudy.png'),
        'Overcast': require('../../assets/images/cloudy/imageCloudy.png'),
        'Showers': require('../../assets/images/showers/imageShowers.png'),
        'Moderate or heavy rain shower': require('../../assets/images/showers/imageShowers.png'),
        'Light rain': require('../../assets/images/showers/imageShowers.png'),
        'Patchy rain possible': require('../../assets/images/showers/imageShowers.png'),
        'Rain': require('../../assets/images/rain/imageRain.png'),
        'Thunderstorm': require('../../assets/images/thunder/imageThunderstorm.png'),
        'Thundery outbreaks possible': require('../../assets/images/thunder/imageThunderstorm.png'),
        'Moderate or heavy rain with thunder': require('../../assets/images/thunder/imageThunderstorm.png'),
    };

    return (
        <LinearGradient colors={['rgb(102,197,255)', 'rgb(21,128,253)']} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleNavigateBack} style={styles.headerButton}>
                    <Image source={require('../../assets/icons/close/icClose24Px.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>{weekDay}</Text>
                <View style={styles.headerButton} />
            </View>
            <View style={styles.main}>
                <Image style={styles.mainImage} source={imageVariation[condition]} />
                <Text style={styles.littleText}>{condition}</Text>
                <View style={styles.temp}>
                        <Text style={styles.tempText}>{temp}</Text>
                    <Text style={styles.tempCelcius}>°C</Text>

                </View>
                <View style={styles.minMax}>
                    <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                    <Text style={styles.littleText}>{maxTemp}º</Text>
                    <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                    <Text style={styles.littleText}>{minTemp}º</Text>
                </View>
                <View style={styles.weatherConditions}>
                    <View style={styles.weatherItems}>
                        <Image source={require('../../assets/icons/humidity/icHumidity24Px.png')} />
                        <Text style={styles.weatherText}>{humidity}%</Text>
                    </View>
                    <View style={styles.weatherItems}>
                        <Image source={require('../../assets/icons/wind/icWind24Px.png')} />
                        <Text style={styles.weatherText}>{wind} km/h</Text>
                    </View>
                    <View style={styles.weatherItems}>
                        <Image source={require('../../assets/icons/precipitation/icPrecipitation24Px.png')} />
                        <Text style={styles.weatherText}>{precipitation} mm</Text>
                    </View>
                </View>
                </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        height: 140,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerButton: {
        width: 18,
    },
    title: {
        fontFamily: 'Averta-Semibold',
        fontSize: 20,
        color: 'rgb(255,255,255)',
    },
    main: {
        alignItems: 'center',
        alignSelf: "stretch"
    },
    mainImage: {
        width: 160,
        height: 160,
        marginTop: 51.2,
        marginBottom: 12.8
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
    tempText: {
        fontSize: 64,
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)',
        alignSelf: 'center',
    },

    tempCelcius: {
        fontSize: 24,
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)',
        marginBottom: 27

    },
})

export default Detail;