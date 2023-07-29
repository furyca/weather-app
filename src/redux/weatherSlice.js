import { createSlice } from "@reduxjs/toolkit";
import { getLocation, getWeather } from "../utils/utils";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    location: "London",
    latestData: {
      today: null,

      date: null,
      clouds: null,
      feelsLike: null,
      humidity: null,
      pressure: null,
      precipitation: null,

      temperature: null,
      maxTemp: null,
      minTemp: null,
      
      condition: null,
      icon: null,
      description: null,

      windDegree: null,
      windSpeed: null,
    },
    otherDays: [],
  },
  extraReducers: {
    [getWeather.fulfilled]: (state, action) => {
      if (action.payload) {
        const latest = action.payload.list[0]
        state.otherDays = action.payload.list
        state.otherDays.shift()
  
        state.latestData.date = `${new Date(latest.dt_txt).toLocaleString("en-US", {month: 'long', weekday: 'long', day:'numeric'})} - ${latest.dt_txt.slice(-8, -3)}`
        state.latestData.clouds = latest.clouds.all
        state.latestData.feelsLike = latest.main.feels_like
        state.latestData.humidity = latest.main.humidity
        state.latestData.pressure = latest.main.pressure
        state.latestData.temperature = Math.ceil(latest.main.temp)
        state.latestData.maxTemp = latest.main.temp_max
        state.latestData.minTemp = latest.main.temp_min
        state.latestData.condition = latest.weather[0].main
        state.latestData.icon = `https://openweathermap.org/img/wn/${latest.weather[0].icon}@2x.png`
        state.latestData.description = latest.weather[0].description
        state.latestData.windDegree = latest.wind.deg
        state.latestData.windSpeed = latest.wind.speed
        state.latestData.precipitation = Math.ceil(latest.pop*100)
      }
      else state.location = 'London'
  },
    [getLocation.fulfilled]: (state, action) => {
      state.location = action.payload[0].name;
    },
  },
});

export const { changeLocation } = weatherSlice.actions;
export default weatherSlice.reducer;