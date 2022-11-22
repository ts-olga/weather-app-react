import React from "react";
import "./App.css";
import "./index.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="Search-form">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                value="Type a text..."
                className="form-control"
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Current"
                className="btn btn-success w-100"
              ></input>
            </div>
          </div>
        </form>
      </div>
      <div className="City">
        <h1>New York</h1>
        <ul>
          <li>Last updated: Tuesday 10:00</li>
          <li>Cloudy</li>
        </ul>
      </div>
      <div className="Temperature">
        <div className="row">
          <div class="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt=""
            />
            <p>
              19°{" "}
              <span>
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </p>
          </div>
          <div class="col-6">
            <ul>
              <li>Humidity: 80%</li>
              <li>Wind: 10 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
