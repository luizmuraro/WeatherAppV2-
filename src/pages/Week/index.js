import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { useRoute } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import moment from "moment";

import styles from "./styles";
import { backgroundVariations, imageVariation } from "../../utils";
import iconMax from "../../assets/icons/max/icMax12Px.png";
import iconMin from "../../assets/icons/min/icMin12Px.png";
import iconArrowRight from "../../assets/icons/arrowRight/icArrowright24Px.png";

const mockData = [
  {
    day: {
      date: moment().add(3, "days"),
      condition: {
        text: "Cloudy"
      },
      maxtemp_c: 24,
      mintemp_c: 18,
      avgtemp_c: 22,
      avghumidity: 50,
      maxwind_kph: 2,
      totalprecip_mm: 20
    }
  },
  {
    day: {
      date: moment().add(4, "days"),
      condition: {
        text: "Showers"
      },
      maxtemp_c: 24,
      mintemp_c: 18,
      avgtemp_c: 22,
      avghumidity: 50,
      maxwind_kph: 2,
      totalprecip_mm: 20
    }
  },
  {
    day: {
      date: moment().add(5, "days"),
      condition: {
        text: "Rain"
      },
      maxtemp_c: 24,
      mintemp_c: 18,
      avgtemp_c: 22,
      avghumidity: 50,
      maxwind_kph: 2,
      totalprecip_mm: 20
    }
  },
  {
    day: {
      date: moment().add(6, "days"),
      condition: {
        text: "Thunderstorm"
      },
      maxtemp_c: 24,
      mintemp_c: 18,
      avgtemp_c: 22,
      avghumidity: 50,
      maxwind_kph: 2,
      totalprecip_mm: 20
    }
  }
];

const Week = ({ navigation }) => {
  const routes = useRoute();

  const {
    forecast: { forecastday },
    conditionDescription
  } = routes.params;

  // Navigate to the previous screen
  function handleNavigateBack() {
    navigation.goBack();
  }

  // Navigate to detail screen, sending the forecast and the selected day of the week
  function handleNavigateTodetail(dayForecast, weekDay) {
    navigation.navigate("Detail", { dayForecast, weekDay });
  }

  function getWeekDay(date, size = "ddd") {
    return moment(date).format(size);
  }

  return (
    <LinearGradient
      colors={backgroundVariations[conditionDescription]}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleNavigateBack}
          style={styles.headerButton}
        >
          <Image style={styles.headerIcon} source={iconArrowRight} />
        </TouchableOpacity>
        <Text style={styles.title}>This Week</Text>
        <View style={styles.headerButton} />
      </View>

      {forecastday.map(day => (
        <TouchableOpacity
          key={day.date}
          style={styles.item}
          onPress={() =>
            handleNavigateTodetail(day, getWeekDay(day.date, "dddd"))
          }
        >
          <View style={styles.itemContainer}>
            <Text style={[styles.littleText, styles.dayText]}>
              {getWeekDay(day.date)}
            </Text>
            <Image
              style={styles.itemImage}
              source={imageVariation[day.day.condition.text]}
            />
            <Text style={styles.littleText}>{day.day.condition.text}</Text>
          </View>
          <View style={styles.minMax}>
            <Image source={iconMax} />
            <Text style={styles.minMaxText}>
              {Math.round(day.day.maxtemp_c)}º
            </Text>
            <Image source={iconMin} />
            <Text style={styles.minMaxText}>
              {Math.round(day.day.mintemp_c)}º
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Static items, because the free plan of the API just return 3 days of forecast */}

      {mockData.map(day => (
        <TouchableOpacity
          key={day.day.date}
          style={styles.item}
          onPress={() =>
            handleNavigateTodetail(day, getWeekDay(day.date, "dddd"))
          }
        >
          <View style={styles.itemContainer}>
            <Text style={[styles.littleText, styles.dayText]}>
              {getWeekDay(day.date)}
            </Text>
            <Image
              style={styles.itemImage}
              source={imageVariation[day.day.condition.text]}
            />
            <Text style={styles.littleText}>{day.day.condition.text}</Text>
          </View>
          <View style={styles.minMax}>
            <Image source={iconMax} />
            <Text style={styles.minMaxText}>
              {Math.round(day.day.maxtemp_c)}º
            </Text>
            <Image source={iconMin} />
            <Text style={styles.minMaxText}>
              {Math.round(day.day.mintemp_c)}º
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
};

export default Week;
