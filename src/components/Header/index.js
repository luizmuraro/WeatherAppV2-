import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.icon} />
    </View>
  );
};

export default Header;
