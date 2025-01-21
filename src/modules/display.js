export default class DisplayManager {
  static CITY_INFO = document.querySelector(".title");
  static TEMP = document.querySelector(".temperature");
  static TEMP_UNIT = document.querySelector(".unit");
  static HUMIDITY = document.querySelector(".info-humidity");
  static CONDITION = document.querySelector(".info-condition");
  static WIND_SPEED = document.querySelector(".info-wind-speed");

  static GIF_IMAGE = document.querySelector("#gif-status");

  static renderWeatherData = (data) => {
    this.CITY_INFO.innerHTML = data.resolvedAddress;
    this.TEMP.innerHTML = data.currentConditions.temp;
    this.TEMP_UNIT.innerHTML = "°F";
    this.HUMIDITY.innerHTML = `Humidity ${data.currentConditions.humidity}`;
    this.CONDITION.innerHTML = `${data.currentConditions.conditions}`;
    this.WIND_SPEED.innerHTML = `Wind Speed ${data.currentConditions.windspeed}`;
  };

  static renderGIFImage = (gifData) => {
    console.log(gifData);
    this.GIF_IMAGE.src = gifData.data.images.original.url;
    console.log("Passed", this.GIF_IMAGE);
  };
}
