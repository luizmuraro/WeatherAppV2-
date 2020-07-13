import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { useRoute } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

import CoreHome from "../../components/CoreHome";
import { backgroundVariations } from "../../utils";
import styles from "./styles";
import iconClose from "../../assets/icons/close/icClose24Px.png";

const Detail = ({ navigation }) => {
  const [weekDay, setWeekDay] = useState("");
  const [condition, setCondition] = useState("Clear");
  const [temp, setTemp] = useState("");
  const [maxtemp_c, setMaxtemp_c] = useState("");
  const [mintemp_c, setMintemp_c] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [precipitation, setPrecipitation] = useState("");

  const routes = useRoute();

  useEffect(() => {
    setWeekDay(routes.params.weekDay);
    const {
      condition,
      avgtemp_c,
      maxtemp_c,
      mintemp_c,
      avghumidity,
      maxwind_kph,
      totalprecip_mm
    } = routes.params.dayForecast.day;
    setCondition(condition.text);
    setTemp(avgtemp_c);
    setMaxtemp_c(maxtemp_c);
    setMintemp_c(mintemp_c);
    setHumidity(avghumidity);
    setWind(maxwind_kph);
    setPrecipitation(totalprecip_mm);
  }, []);

  // Navigate to the previous screen
  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient
      colors={backgroundVariations[condition]}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleNavigateBack}
          style={styles.headerButton}
        >
          <Image source={iconClose} />
        </TouchableOpacity>
        <Text style={styles.title}>{weekDay}</Text>
        <View style={styles.headerButton} />
      </View>
      <CoreHome
        currentTemp={temp}
        currentCondition={condition}
        currentHumidity={humidity}
        currentWind={wind}
        currentPrecipitation={precipitation}
        todayForecast={{ maxtemp_c, mintemp_c }}
      />
    </LinearGradient>
  );
};

export default Detail;
