import React from "react";
import "../styles/weatherTab.sass";

const WeatherTab = ({ info, temp }) => {
  const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
  const capitalize = s => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  let day, month, hour, minute;
  if (temp !== undefined) {
    const date = new Date(temp.dt * 1000);
    day = ("0" + date.getDate()).slice(-2);
    month = ("0" + (date.getMonth() + 1)).slice(-2);
    hour = ("0" + date.getUTCHours()).slice(-2);
    minute = ("0" + date.getUTCMinutes()).slice(-2);
  }
  return (
    <div>
      {info && (
        <React.Fragment>
          <span>
            <h2>{info.city.name}</h2>, <h3>{info.city.country}</h3>
          </span>
          <div className="task">
            Max day temperature:
            <b>
              {info.day !== undefined ? " " + info.day.toFixed(0) : " - -"}
              &#8451;
            </b>
            <br />
            Min night temperature:
            <b>
              {info.night !== undefined ? " " + info.night.toFixed(0) : " - -"}
            </b>
            &#8451;
            <br />
            Average morning temperature:
            <b>
              {info.morning !== undefined
                ? " " + info.morning.toFixed(0)
                : " - -"}
              &#8451;
            </b>
            <br />
            Average humidity temperature:
            <b>
              {info.humidity !== undefined
                ? " " + average(info.humidity) + "%"
                : " - -"}
            </b>
          </div>
        </React.Fragment>
      )}
      {temp && (
        <div className={"tempInfo"}>
          <b>{day + "." + month + " " + hour + ":" + minute}</b>
          <br />
          <br />
          <p>
            Temperature:<b>{" " + temp.main.temp.toFixed(0)}&#8451;</b>{" "}
          </p>
          <p>
            Humidity:
            <b>{" " + temp.main.humidity + "%"}</b>
          </p>
          <p>
            <i>{capitalize(temp.weather[0].description)}</i>
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherTab;
