import React from "react";
import "./info.css";

const Infobox = ({ w }) => {
    return (
        
        <div id="info">
            
            <div id="feel">
                {w.main ? <p className="font bold">{w.main.temp.toFixed()}°</p> : null}
                <p className="font">الحرارة</p>
            </div>
            <div id="hum">
                {w.main ? <p className="font bold">{w.main.humidity}%</p> : null}
                <p className="font">الرطوبة</p>
            </div>
            <div id="wind">
                 {w.wind ? <p className="font bold">{w.wind.speed.toFixed()} ك / س</p> : null}
                <p className="font">سرعة الرياح</p>
            </div>
            
        </div>
    );
};

export default Infobox;