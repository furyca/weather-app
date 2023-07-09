import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk("getWeather", async (location) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  );

  return await res.json();
});

export const getLocation = createAsyncThunk("getLocation", async (text) => {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
  );

  return await res.json();
});

//Fontawesome rotation include only 0, 90, 180 and 270
//Convert icon to the nearest available number
export const round90 = (deg) => 
{
  let degree = Math.ceil(deg / 90) * 90
  return degree === 360 ?  0 : degree
}