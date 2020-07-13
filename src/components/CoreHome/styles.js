import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  main: {
    alignItems: "center",
    alignSelf: "stretch"
  },
  minMax: {
    flexDirection: "row",
    alignItems: "center"
  },
  weatherConditions: {
    flexDirection: "row",
    marginTop: 70.4,
    alignSelf: "stretch",
    justifyContent: "space-between",
    paddingHorizontal: 52
  },
  weatherText: {
    fontSize: 16,
    fontFamily: "Averta-Semibold",
    color: "rgb(255,255,255)"
  },
  weatherItems: {
    alignItems: "center"
  },
  mainImage: {
    width: 160,
    height: 160,
    marginTop: 25,
    marginBottom: 12.8
  },
  littleText: {
    fontSize: 14,
    fontFamily: "Averta-Semibold",
    color: "rgb(255,255,255)",
    marginRight: 9.6
  },
  temp: {
    flexDirection: "row",
    marginTop: 19.2,
    marginBottom: 19.2,
    alignItems: "center",
    marginLeft: 13
  },
  tempText: {
    fontSize: 64,
    fontFamily: "Averta-Semibold",
    color: "rgb(255,255,255)",
    alignSelf: "center"
  },

  tempCelcius: {
    fontSize: 24,
    fontFamily: "Averta-Semibold",
    color: "rgb(255,255,255)",
    marginBottom: 27
  }
});
