// weather.js
import DisplayManager from "./display";

export default class APIHandler {
  static WEATHER_API_KEY = "8MCYEBPRMD6PF2CJSAK9FZ39A";
  static GIF_API_KEY = "zcYhTLfDOXi6nNPo6FAZuRrpVHagSiQ6";

  static getWeatherData = async (location) => {
    const format = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${this.WEATHER_API_KEY}`;

    try {
      const response = await fetch(format, { mode: "cors" });

      if (!response.ok) {
        alert("This is not a valid location :(");
      }

      const apiData = await response.json();
      DisplayManager.renderWeatherData(apiData);
      this.getGIFData(apiData, apiData.currentConditions.conditions);

      return apiData;
    } catch (e) {
      alert(e);
      return null;
    }
  };

  static getGIFData = async (mood, condition) => {
    // const conditionMoodMap = {
    //   "Clear": "sunny",
    //   "Partly Cloudy": "partly cloudy",
    //   "Cloudy": "overcast",
    //   "Rain": "rainy",
    //   "Thunderstorm": "stormy",
    //   "Snow": "snowy",
    //   "Drizzle": "rainy",
    //   "Fog": "foggy",
    //   "Hail": "hailstorm",
    // };

    const format = `https://api.giphy.com/v1/gifs/translate?api_key=${this.GIF_API_KEY}&s=${condition} weather`;

    try {
      const response = await fetch(format, { mode: "cors" });
      if (!response.ok) {
        alert("Issue getting gif");
      }
      const apiData = await response.json();
      console.log(apiData);
      DisplayManager.renderGIFImage(apiData);
    } catch (e) {
      alert(e);
    }
  };
}
