import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const Week = () => {

    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }
    function handleNavigateTodetail() {
        navigation.navigate('Detail');
    }

    return (
        <LinearGradient colors={['rgb(102,197,255)', 'rgb(21,128,253)']} style={styles.container}>
            <View style={styles.header} >
                <TouchableOpacity onPress={handleNavigateBack} style={styles.headerButton}>
                    <Image style={styles.headerIcon} source={require('../../assets/icons/arrowRight/icArrowright24Px.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>This Week</Text>
                <View style={styles.headerButton} />
            </View>

            <TouchableOpacity style={styles.item} onPress={() => handleNavigateTodetail()}>
                <View style={styles.itemContainer}>
                    <Text style={[styles.littleText, styles.dayText]}>sun</Text>
                    <Image style={styles.itemImage} source={require('../../assets/images/bottomsunny/imageSunny.png')} />
                    <Text style={styles.littleText}>Sunny</Text>
                </View>
                <View style={styles.minMax}>
                    <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                    <Text style={styles.minMaxText}>24º</Text>
                    <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                    <Text style={styles.minMaxText}>18º</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.item} onPress={() => handleNavigateTodetail()}>
                <View style={styles.itemContainer}>
                <Text style={[styles.littleText, styles.dayText]}>mon</Text>
                    <Image style={styles.itemImage} source={require('../../assets/images/partlycloudy/imagePartlycloudy.png')} />
                    <Text style={styles.littleText}>Partly cloudy</Text>
                </View>
                <View style={styles.minMax}>
                    <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                    <Text style={styles.minMaxText}>24º</Text>
                    <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                    <Text style={styles.minMaxText}>18º</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.item} onPress={() => handleNavigateTodetail()}>
                <View style={styles.itemContainer}>
                <Text style={[styles.littleText, styles.dayText]}>tue</Text>
                    <Image style={styles.itemImage} source={require('../../assets/images/showers/imageShowers.png')} />
                    <Text style={styles.littleText}>Showers</Text>
                </View>
                <View style={styles.minMax}>
                    <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                    <Text style={styles.minMaxText}>24º</Text>
                    <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                    <Text style={styles.minMaxText}>18º</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.item} onPress={() => handleNavigateTodetail()}>
                <View style={styles.itemContainer}>
                <Text style={[styles.littleText, styles.dayText]}>wed</Text>
                    <Image style={styles.itemImage} source={require('../../assets/images/thunder/imageThunderstorm.png')} />
                    <Text style={styles.littleText}>Thunderstorm</Text>
                </View>
                <View style={styles.minMax}>
                    <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                    <Text style={styles.minMaxText}>24º</Text>
                    <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                    <Text style={styles.minMaxText}>18º</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.item} onPress={() => handleNavigateTodetail()}>
                <View style={styles.itemContainer}>
                <Text style={[styles.littleText, styles.dayText]}>thu</Text>
                    <Image style={styles.itemImage} source={require('../../assets/images/rain/imageRain.png')} />
                    <Text style={styles.littleText}>Rain</Text>
                </View>
                <View style={styles.minMax}>
                    <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                    <Text style={styles.minMaxText}>24º</Text>
                    <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                    <Text style={styles.minMaxText}>18º</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.item} onPress={() => handleNavigateTodetail()}>
                <View style={styles.itemContainer}>
                <Text style={[styles.littleText, styles.dayText]}>fri</Text>
                    <Image style={styles.itemImage} source={require('../../assets/images/cloudy/imageCloudy.png')} />
                    <Text style={styles.littleText}>Cloudy</Text>
                </View>
                <View style={styles.minMax}>
                    <Image source={require('../../assets/icons/max/icMax12Px.png')} />
                    <Text style={styles.minMaxText}>24º</Text>
                    <Image source={require('../../assets/icons/min/icMin12Px.png')} />
                    <Text style={styles.minMaxText}>18º</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.item} onPress={() => handleNavigateTodetail()}>
                <View style={styles.itemContainer}>
                <Text style={[styles.littleText, styles.dayText]}>sat</Text>
                    <Image style={styles.itemImage} source={require('../../assets/images/mostlycloudy/imageMostlycloudy.png')} />
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
        textTransform: 'capitalize',
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