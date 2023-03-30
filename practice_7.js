// Weather API: Create a program that uses a weather API to
// fetch weather data for a given location and displays it to the
// console.

const prompt = require("prompt-sync")();
const axios = require("axios");

let query = prompt("Enter the location to know the weather: ");

const params = {
  access_key: "cf7510d4cc6c13733fbfa358fa9a20ee",
  //   query: "Ahmedabad",
  query,
};

axios
  .get("http://api.weatherstack.com/current", { params })
  .then((response) => {
    const apiResponse = response.data;
    // console.log(
    //   `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃\n`,
    //   `Current weather is ${apiResponse.current.weather_descriptions}`
    // );
    console.log(apiResponse);
  })
  .catch((error) => {
    console.log(error);
  });
