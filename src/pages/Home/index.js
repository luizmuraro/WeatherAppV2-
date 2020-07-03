import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

const Home = () => {
    return (

        <View style={styles.container}>
            <Header />
            <View style={styles.main}>
                <Image style={{ width: 160, height: 160 }} source={require('../../assets/sunny/imageSunny.png')} />
                <Text>Sunny</Text>
                <Text>22ºC</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>24º</Text>
                    <Text>18º</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>50%</Text>
                    <Text>2km/h</Text>
                    <Text>20mm</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 40, height: 40 }} source={require('../../assets/sunny/imageSunny.png')} />
                    <View>
                        <Text>Tomorrow</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>24º</Text>
                            <Text>18º</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center',}}>
                        <Text>See the full week</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
    }

})

export default Home;
