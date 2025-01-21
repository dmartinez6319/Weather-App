// index.js
import "./styles.css";
import APIHandler from "./modules/apis";

const SEARCH_BUTTON = document.querySelector("#search-button");
const SEARCH_BAR = document.querySelector("#search-bar");

SEARCH_BUTTON.addEventListener("click", async () => {
  const SEARCH_BUTTON_VALUE = SEARCH_BAR.value;
  const WEATHER_DATA = await APIHandler.getWeatherData(SEARCH_BUTTON_VALUE);
  console.log(WEATHER_DATA);
});
