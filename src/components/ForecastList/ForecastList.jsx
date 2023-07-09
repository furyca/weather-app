import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../utils/utils";
import style from "./ForecastList.module.scss";
import Forecast from "../Forecast/Forecast";
import { nanoid } from "@reduxjs/toolkit";

const ForecastList = () => {
  const dispatch = useDispatch();
  const { location, otherDays } = useSelector((state) => state.weatherSlice);

  useEffect(() => {
    dispatch(getWeather(location));
  }, [location, dispatch]);

  const others = otherDays.map((element) => {
    return (
      <Forecast
        key={nanoid()}
        id={otherDays.indexOf(element)}
      />
    );
  });

  return <ul className={style.forecastList}>{others}</ul>;
};

export default ForecastList;
