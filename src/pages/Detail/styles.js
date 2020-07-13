import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    height: 140,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerButton: {
    width: 18
  },
  title: {
    fontFamily: "Averta-Semibold",
    fontSize: 20,
    color: "rgb(255,255,255)"
  },
  main: {
    alignItems: "center",
    alignSelf: "stretch"
  },
  mainImage: {
    width: 160,
    height: 160,
    marginTop: 51.2,
    marginBottom: 12.8
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
  littleText: {
    fontSize: 14,
    fontFamily: "Averta-Semibold",
    color: "rgb(255,255,255)",
    marginRight: 9.6,
    textTransform: "capitalize"
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
