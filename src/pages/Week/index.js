import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';


const Week = () => {

    const navigation = useNavigation();
    const routes = useRoute();
    const [forecast, setForecast] = useState([]);
    const [weekDays, setWeekDays] = useState([]);

    useEffect(() => {
        const { forecastday } = routes.params.forecast;
        setForecast(forecastday);

        function getWeekDay() {
            const days = [];
            forecastday.map(day => {
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
    function handleNavigateTodetail(dayForecast, weekDay) {
        navigation.navigate('Detail', { dayForecast, weekDay });
    }

    const dayVariation = {
        0: 'Monday',
        1: 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4: 'Friday',
        5: 'Saturday',
        6: 'Sunday'
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
        'Moderate or heavy rain shower': require('../../assets/images/showers/imageShowers.png'),
        'Light rain': require('../../assets/images/showers/imageShowers.png'),
        'Patchy rain possible': require('../../assets/images/showers/imageShowers.png'),
        'Rain': require('../../assets/images/rain/imageRain.png'),
        'Thunderstorm': require('../../assets/images/thunder/imageThunderstorm.png'),
        'Thundery outbreaks possible': require('../../assets/images/thunder/imageThunderstorm.png'),
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
                    onPress={() => handleNavigateTodetail(day, dayVariation[weekDays[index]])}
                >
                    <View style={styles.itemContainer}>
                        <Text style={[styles.littleText, styles.dayText]}>{dayVariation[weekDays[index]].substring(0, 3)}</Text>
                        <Image style={styles.itemImage} source={imageVariation[day.day.condition.text]} />
                        <Text style={styles.littleText}>{day.day.condition.text}</Text>
                    </View>
                    <View style={styles.minMax}>
                        <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                        <Text style={styles.minMaxText}>{Math.round(day.day.maxtemp_c)}º</Text>
                        <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                        <Text style={styles.minMaxText}>{Math.round(day.day.mintemp_c)}º</Text>
                    </View>
                </TouchableOpacity>
            ))}

            {/* Static items, because the free API just return 3 forecast days */}
            <TouchableOpacity
                style={styles.item}
            >
                <View style={styles.itemContainer}>
                    <Text style={[styles.littleText, styles.dayText]}>Thu</Text>
                    <Image style={styles.itemImage} source={imageVariation['Thunderstorm']} />
                    <Text style={styles.littleText}>Thunderstorm</Text>
                </View>
                <View style={styles.minMax}>
                    <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                    <Text style={styles.minMaxText}>24º</Text>
                    <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                    <Text style={styles.minMaxText}>18º</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
            >
                <View style={styles.itemContainer}>
                    <Text style={[styles.littleText, styles.dayText]}>Fri</Text>
                    <Image style={styles.itemImage} source={imageVariation['Rain']} />
                    <Text style={styles.littleText}>Rain</Text>
                </View>
                <View style={styles.minMax}>
                    <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                    <Text style={styles.minMaxText}>24º</Text>
                    <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                    <Text style={styles.minMaxText}>18º</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
            >
                <View style={styles.itemContainer}>
                    <Text style={[styles.littleText, styles.dayText]}>Sat</Text>
                    <Image style={styles.itemImage} source={imageVariation['Cloudy']} />
                    <Text style={styles.littleText}>Cloudy</Text>
                </View>
                <View style={styles.minMax}>
                    <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                    <Text style={styles.minMaxText}>24º</Text>
                    <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                    <Text style={styles.minMaxText}>18º</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
            >
                <View style={styles.itemContainer}>
                    <Text style={[styles.littleText, styles.dayText]}>Sun</Text>
                    <Image style={styles.itemImage} source={imageVariation['Mostly cloudy']} />
                    <Text style={styles.littleText}>Mostly cloudy</Text>
                </View>
                <View style={styles.minMax}>
                    <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                    <Text style={styles.minMaxText}>24º</Text>
                    <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                    <Text style={styles.minMaxText}>18º</Text>
                </View>
            </TouchableOpacity>

        </LinearGradient>
    );
}

export default Week;