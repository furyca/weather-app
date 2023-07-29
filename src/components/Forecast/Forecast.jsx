import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Forecast.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faArrowUp, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'
import { round90 } from "../../utils/utils";

const Forecast = ({ id }) => {
  const [closed, setClosed] = useState(true);
  const { otherDays } = useSelector((state) => state.weatherSlice);
  
  const hour = otherDays[id].dt_txt.slice(-8, -3)
  const day = new Date(otherDays[id].dt_txt).toLocaleString("en-US", {month: 'long', weekday: 'long', day:'numeric'})
  const precipitationPerCent = Math.ceil(otherDays[id].pop*100)
  const windRotation = round90(otherDays[id].wind.deg)

  return (
    <>
      <h3 className={`${(hour === '00:00' || id === 0) ? style.marginVertical : style.hidden}`}>
        {day}
      </h3>
      <li onClick={() => setClosed(!closed)}>
          <div className={`${style.main} ${closed ? '' : style.divisionBorder}`}>
            <div className={style.leftSide}>
              <p>{hour}</p>

              <div className={style.conditionContainer}>
                <img src={`https://openweathermap.org/img/wn/${otherDays[id].weather[0].icon}.png`} alt="" />
                <i>{otherDays[id].weather[0].main}</i>
              </div>

              <p className={style.dayTemp}>{Math.ceil(otherDays[id].main.temp)}°</p>
            </div>
            
            <div className={style.rightSide}>

              <div>
                <FontAwesomeIcon icon={faDroplet} className={`${style.iconColor} ${style.marginRight10}`} />
                <span>{precipitationPerCent}%</span>
              </div>

              <div>
                <FontAwesomeIcon icon={faWind} className={`${style.iconColor} ${style.marginRight25}`} />
                <FontAwesomeIcon icon={faArrowUp} rotation={windRotation} className={style.iconColor} />
                <span className={style.marginLeft10} >{otherDays[id].wind.speed} m/s</span>
              </div>

              <div>
                <FontAwesomeIcon icon={faAngleUp} flip={closed ? "vertical" : false} size="2xl" />
              </div>

            </div>
          </div>

          <div className={closed ? style.hidden : ''}>
            <div className={style.detailsContainer}>

              <div>
                <p><b>Wind Speed: </b><small>{otherDays[id].wind.speed} m/s</small></p>
                <p><b>Wind Direction: </b><FontAwesomeIcon icon={faArrowUp} rotation={windRotation} className={style.iconColor} ></FontAwesomeIcon></p>
              </div>

              <div>
                <p><b>Clouds: </b><small>{otherDays[id].clouds.all}%</small></p>
                <p><b>Detail: </b><small>{otherDays[id].weather[0].description}</small></p>            
              </div>

              <div>
                <p><b>Humidity: </b><small>{otherDays[id].main.humidity}%</small></p>
                <p><b>Pressure: </b><small>{otherDays[id].main.pressure}</small></p>
                <p><b>Precipitation: </b><small>{precipitationPerCent}%</small></p>
              </div>

              <div>
                <p><b>Feels Like: </b><small>{otherDays[id].main.feels_like}°C</small></p>
                <p><b>Max Temp.: </b><small>{otherDays[id].main.temp_max}°C</small></p>
                <p><b>Min Temp.: </b><small>{otherDays[id].main.temp_min}°C</small></p>
              </div>

            </div>
          </div>
      </li>
</>
  );
};

export default Forecast;
