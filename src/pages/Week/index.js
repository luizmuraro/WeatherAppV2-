import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';


const Week = () => {

    const navigation = useNavigation();
    const routes = useRoute();
    const [forecast, setForecast] = useState([]);
    const [weekDays, setWeekDays] = useState([]);

    useEffect( () => {
        const { forecastday } = routes.params.forecast;
        setForecast(forecastday);
        
        function getWeekDay() {
            const days = [];
            forecastday.map( day => {
                var date = new Date(day.date);
                days.push(date.getDay(day.date));
            })
            setWeekDays(days);
        }
        getWeekDay();
    }, []);


    function handleNavigateBack() {
        navigation.goBack();
    }
    function handleNavigateTodetail() {
        navigation.navigate('Detail');
    }

    const dayVariation = {
        0: 'Mon',
        1: 'Tue',
        2: 'Wed',
        3: 'Thu',
        4: 'Fri',
        5: 'Sat',
        6: 'Sun'
    }

    const imageVariation = {
        'Sunny': require('../../assets/images/sunny/imageSunny.png'),
        'Clear': require('../../assets/images/sunny/imageSunny.png'),
        'Partly cloudy': require('../../assets/images/partlycloudy/imagePartlycloudy.png'),
        'Mostly cloudy': require('../../assets/images/mostlycloudy/imageMostlycloudy.png'),
        'Cloudy': require('../../assets/images/cloudy/imageCloudy.png'),
        'Mist': require('../../assets/images/cloudy/imageCloudy.png'),
        'Overcast': require('../../assets/images/cloudy/imageCloudy.png'),
        'Showers': require('../../assets/images/showers/imageShowers.png'),
        'Patchy rain possible': require('../../assets/images/showers/imageShowers.png'),
        'Rain': require('../../assets/images/rain/imageRain.png'),
        'Thunderstorm': require('../../assets/images/thunder/imageThunderstorm.png'),
        'Thundery outbreaks possible': require('../../assets/images/thunder/imageThunderstorm.png'),
        'Moderate rain at times': require('../../assets/images/showers/imageShowers.png'),

    };

    return (
        <LinearGradient colors={['rgb(102,197,255)', 'rgb(21,128,253)']} style={styles.container}>
            <View style={styles.header} >
                <TouchableOpacity onPress={handleNavigateBack} style={styles.headerButton}>
                    <Image style={styles.headerIcon} source={require('../../assets/icons/arrowRight/icArrowright24Px.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>This Week</Text>
                <View style={styles.headerButton} />
            </View>

            {forecast.map((day, index) => (
                <TouchableOpacity
                    key={day.date}
                    style={styles.item}
                    onPress={() => handleNavigateTodetail()}
                >
                    <View style={styles.itemContainer}>
                        <Text style={[styles.littleText, styles.dayText]}>{dayVariation[weekDays[index]]}</Text>
                        <Image style={styles.itemImage} source={imageVariation[day.day.condition.text]} />
                        <Text style={styles.littleText}>{day.day.condition.text}</Text>
                    </View>
                    <View style={styles.minMax}>
                        <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                        <Text style={styles.minMaxText}>{day.day.maxtemp_c}º</Text>
                        <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                        <Text style={styles.minMaxText}>{day.day.mintemp_c}º</Text>
                    </View>
                </TouchableOpacity>
            ))}
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
        width: 18
    },
    headerIcon: {
        transform: [{
            rotate: '180deg'
        }]
    },
    title: {
        fontFamily: 'Averta-Semibold',
        fontSize: 20,
        color: 'rgb(255,255,255)',
    },
    item: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginBottom: 26
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    itemImage: {
        marginHorizontal: 15,
        width: 40,
        height: 40
    },
    minMax: {
        flexDirection: "row",
        paddingRight: 24,
    },
    littleText: {
        fontSize: 14,
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)',
        width: 100,
    },
    minMaxText: {
        fontSize: 12,
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)',
        paddingRight: 10
    },
    dayText: {
        width: 40
    }
})

export default Week;