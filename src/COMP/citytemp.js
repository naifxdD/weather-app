import React from "react";
import "./citytemp.css";

const Citytemp = ({ w }) => {
    return (
        <div id="cont">
            <p id="city">{w.name}</p>
            {w.main ? <h1 id="temp">{w.main.temp.toFixed()}°</h1> : null}
            {w.weather ? <p id="cloud">{w.weather[0].description}</p> : null}
            
        </div>
    );
};

export default Citytemp;