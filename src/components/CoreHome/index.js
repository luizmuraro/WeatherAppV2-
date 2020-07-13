import React from "react";
import { View, Image, Text } from "react-native";
import { imageVariation } from "../../utils";
import styles from "./styles";

import iconHumidity from "../../assets/icons/humidity/icHumidity24Px.png";
import iconWind from "../../assets/icons/wind/icWind24Px.png";
import iconPrecipitation from "../../assets/icons/precipitation/icPrecipitation24Px.png";
import iconMax from "../../assets/icons/max/icMax12Px.png";
import iconMin from "../../assets/icons/min/icMin12Px.png";

const CoreHome = props => {
  const {
    currentCondition,
    currentTemp,
    currentHumidity,
    currentWind,
    currentPrecipitation,
    todayForecast: { maxtemp_c, mintemp_c }
  } = props;

  return (
    <View style={styles.main}>
      <Image
        style={styles.mainImage}
        source={imageVariation[currentCondition]}
      />
      <Text style={styles.littleText}>{currentCondition}</Text>
      <View style={styles.temp}>
        <Text style={styles.tempText}>{Math.round(currentTemp)}</Text>
        <Text style={styles.tempCelcius}>°C</Text>
      </View>
      <View style={styles.minMax}>
        <Image source={iconMax} />
        <Text style={styles.littleText}>{Math.round(maxtemp_c)}º</Text>
        <Image source={iconMin} />
        <Text style={styles.littleText}>{Math.round(mintemp_c)}º</Text>
      </View>
      <View style={styles.weatherConditions}>
        <View style={styles.weatherItems}>
          <Image source={iconHumidity} />
          <Text style={styles.weatherText}>{currentHumidity}%</Text>
        </View>
        <View style={styles.weatherItems}>
          <Image source={iconWind} />
          <Text style={styles.weatherText}>{currentWind} km/h</Text>
        </View>
        <View style={styles.weatherItems}>
          <Image source={iconPrecipitation} />
          <Text style={styles.weatherText}>{currentPrecipitation} mm</Text>
        </View>
      </View>
    </View>
  );
};

export default CoreHome;
