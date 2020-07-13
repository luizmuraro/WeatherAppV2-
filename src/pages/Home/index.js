import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import LinearGradient from "react-native-linear-gradient";
import axios from "axios";
import Geolocation from "@react-native-community/geolocation";

import Header from "../../components/Header";
import CoreHome from "../../components/CoreHome";
import styles from "./styles";
import { backgroundVariations, imageVariation } from "../../utils";
import iconMax from "../../assets/icons/max/icMax12Px.png";
import iconMin from "../../assets/icons/min/icMin12Px.png";
import iconArrowRight from "../../assets/icons/arrowRight/icArrowright24Px.png";

const Home = ({ navigation }) => {
  const [currentWeather, setCurrentWeather] = useState({
    temperature: 0,
    conditionDescription: "Clear",
    humidity: 0,
    wind: 0,
    precipitation: 0
  });
  const [todayForecast, setTodayForecast] = useState(0);
  const [tomorrowForecast, setTomorrowForecast] = useState(0);
  const [tomorrowCondition, setTomorrowCondition] = useState("Clear");
  const [weekForecast, setWeekForecast] = useState("");

  useEffect(() => {
    getPositionAndForecast();
  }, []);

  // Get the device current position, and send it to the weather api
  function getPositionAndForecast() {
    Geolocation.getCurrentPosition(
      info => {
        const { latitude, longitude } = info.coords;
        axios
          .get(
            `http://api.weatherapi.com/v1/forecast.json?key=bcb8eece729c406b820220103200707&q=${latitude},${longitude}&days=7`
          )
          .then(response => {
            const {
              temp_c: temperature,
              condition: { text: conditionDescription },
              humidity,
              wind_kph: wind,
              precip_mm: precipitation
            } = response.data.current;
            const { forecast } = response.data;
            setCurrentWeather({
              temperature,
              conditionDescription,
              humidity,
              wind,
              precipitation
            });
            setTodayForecast(forecast.forecastday[0].day);
            setTomorrowForecast(forecast.forecastday[1].day);
            setTomorrowCondition(forecast.forecastday[1].day.condition.text);
            setWeekForecast(forecast);
          });
      },
      error => {
        alert(
          "Can't get device location, setting 'Florianópolis' as location."
        );
        axios
          .get(
            `http://api.weatherapi.com/v1/forecast.json?key=bcb8eece729c406b820220103200707&q=-27.59044833333333,-48.51260833333334&days=7`
          )
          .then(response => {
            const {
              temp_c: temperature,
              condition: { text: conditionDescription },
              humidity,
              wind_kph: wind,
              precip_mm: precipitation
            } = response.data.current;
            const { forecast } = response.data;
            setCurrentWeather({
              temperature,
              conditionDescription,
              humidity,
              wind,
              precipitation
            });
            setTodayForecast(forecast.forecastday[0].day);
            setTomorrowForecast(forecast.forecastday[1].day);
            setTomorrowCondition(forecast.forecastday[1].day.condition.text);
            setWeekForecast(forecast);
          });
      }
    );
  }

  // Navigate to full week screen, sending the week forecast as param
  function handleNavigateToWeek() {
    navigation.navigate("Week", {
      forecast: weekForecast,
      conditionDescription: currentWeather.conditionDescription
    });
  }

  return (
    <LinearGradient
      colors={backgroundVariations[currentWeather.conditionDescription]}
      style={styles.container}
    >
      <Header />
      <CoreHome
        currentTemp={currentWeather.temperature}
        currentCondition={currentWeather.conditionDescription}
        currentHumidity={currentWeather.humidity}
        currentWind={currentWeather.wind}
        currentPrecipitation={currentWeather.precipitation}
        todayForecast={todayForecast}
      />
      <View style={styles.main}>
        <View style={styles.divider} />
        <View style={styles.footer}>
          <Image
            style={styles.tomorrowImage}
            source={imageVariation[tomorrowCondition]}
          />
          <View style={styles.tomorrowText}>
            <Text style={styles.littleText}> Tomorrow</Text>
            <View style={styles.tomorrowMinMax}>
              <Image source={iconMax} />
              <Text style={styles.littleText}>
                {Math.round(tomorrowForecast.maxtemp_c)}º
              </Text>

              <Image source={iconMin} />
              <Text style={styles.littleText}>
                {Math.round(tomorrowForecast.mintemp_c)}º
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNavigateToWeek}
          >
            <Text style={styles.buttonText}>See the full week</Text>
            <Image style={styles.buttonIcon} source={iconArrowRight} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Home;
