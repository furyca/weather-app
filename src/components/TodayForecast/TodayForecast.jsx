import { useSelector } from "react-redux";
import style from "./TodayForecast.module.scss";
import { round90 } from "../../utils/utils";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodayForecast = () => {
  const {
    condition,
    temperature,
    icon,
    windSpeed,
    windDegree,
    date,
    clouds,
    feelsLike,
    humidity,
    pressure,
    maxTemp,
    minTemp,
    description,
    precipitation
  } = useSelector((state) => state.weatherSlice.latestData);

  return (
    <>
      <small className={style.date}>As of {date}</small>
      <div className={style.todayContainer}>
        <div className={style.todayInner}>
          <img src={icon} alt="" />
          <p><i>{condition}</i></p>
          <b>{temperature}°C</b>
        </div>
        <div className={style.todayForecast}>
          <div>
            <p><b>Wind Speed: </b><small>{windSpeed} m/s</small></p>
            <p><b>Wind Direction: </b><FontAwesomeIcon 
              icon={faArrowUp} rotation={round90(windDegree)} style={{color: "#3e6ec1"}} ></FontAwesomeIcon></p>
          </div>
          <div>
            <p><b>Clouds: </b><small>{clouds}%</small></p>
            <p><b>Detail: </b><small>{description}</small></p>            
          </div>
          <div>
            <p><b>Humidity: </b><small>{humidity}%</small></p>
            <p><b>Pressure: </b><small>{pressure}</small></p>
            <p><b>Precipitation: </b><small>{precipitation}%</small></p>
            
          </div>
          <div>
            <p><b>Feels Like: </b><small>{feelsLike}°C</small></p>
            <p><b>Max Temp.: </b><small>{maxTemp}°C</small></p>
            <p><b>Min Temp.: </b><small>{minTemp}°C</small></p>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default TodayForecast;
