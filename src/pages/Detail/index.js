import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

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
        const { condition, avgtemp_c, maxtemp_c, mintemp_c, avghumidity, maxwind_kph, totalprecip_mm } = routes.params.dayForecast.day;
        setCondition(condition.text);
        setTemp(avgtemp_c);
        setMaxTemp(maxtemp_c);
        setMinTemp(mintemp_c);
        setHumidity(avghumidity);
        setWind(maxwind_kph);
        setPrecipitation(totalprecip_mm);
    }, []);

    // Navigate to the previous screen
    function handleNavigateBack() {
        navigation.goBack();
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
                    <Text style={styles.tempText}>{Math.round(temp)}</Text>
                    <Text style={styles.tempCelcius}>°C</Text>
                </View>
                <View style={styles.minMax}>
                    <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                    <Text style={styles.littleText}>{Math.round(maxTemp)}º</Text>
                    <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                    <Text style={styles.littleText}>{Math.round(minTemp)}º</Text>
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

export default Detail;