import sunny from "./assets/images/sunny/imageSunny.png";
import partlycloudy from "./assets/images/partlycloudy/imagePartlycloudy.png";
import mostlycloudy from "./assets/images/mostlycloudy/imageMostlycloudy.png";
import cloudy from "./assets/images/cloudy/imageCloudy.png";
import showers from "./assets/images/showers/imageShowers.png";
import rain from "./assets/images/rain/imageRain.png";
import thunderStorm from "./assets/images/thunder/imageThunderstorm.png";

const skyBlue = ["rgb(102,197,255)", "rgb(21,128,253)"];
const rainBlue = ["rgb(104,180,239)", "rgb(50,90,194)"];
const thunderBlue = ["rgb(96,134,220)", "rgb(39,51,105)"];

export const backgroundVariations = {
  Clear: skyBlue,
  Sunny: skyBlue,
  "Partly cloudy": skyBlue,
  "Mostly cloudy": skyBlue,
  Cloudy: rainBlue,
  Mist: rainBlue,
  Overcast: rainBlue,
  Showers: rainBlue,
  "Moderate or heavy rain shower": rainBlue,
  "Light rain": rainBlue,
  "Patchy rain possible": rainBlue,
  Rain: rainBlue,
  Thunderstorm: thunderBlue,
  "Thundery outbreaks possible": thunderBlue,
  "Moderate or heavy rain with thunder": thunderBlue
};

export const imageVariation = {
  Sunny: sunny,
  Clear: sunny,
  "Partly cloudy": partlycloudy,
  "Mostly cloudy": mostlycloudy,
  Cloudy: cloudy,
  Mist: cloudy,
  Overcast: cloudy,
  Showers: showers,
  "Moderate or heavy rain shower": showers,
  "Light rain": showers,
  "Patchy rain possible": showers,
  Rain: rain,
  Thunderstorm: thunderStorm,
  "Thundery outbreaks possible": thunderStorm,
  "Moderate or heavy rain with thunder": thunderStorm
};
