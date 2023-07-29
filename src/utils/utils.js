import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeather = createAsyncThunk("getWeather", async (location) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )    

    return response.data;
  }
  //prevent the api key exposal
  catch (error) {
    error.response?.status === 404 && console.clear();
  }
});

export const getLocation = createAsyncThunk("getLocation", async (text) => {
  const response = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
  )

  return response.data;
});

//Fontawesome rotation include only 0, 90, 180 and 270
//Convert icon to the nearest available number
export const round90 = (deg) => 
{
  let degree = Math.ceil(deg / 90) * 90
  return degree === 360 ?  0 : degree
}
