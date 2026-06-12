import SearchBox from "./SearchBox.jsx";
import InfoSearchbox from "./InfoSearchbox.jsx";
import {useState} from "react";
import "./WeatherApp.css";

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState(
        {
        City : "London",
        FeelsLike: 35.06,
        Humidity: 11,
        Temp_Max: 37.88,
        Temp_Min: 37.88,
        Temperature: 37.88,
        Weather: "Clear Sky"
        }
        
    )
    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return(
        <main className="WeatherApp">
            <section className="WeatherApp__panel">
                <div className="WeatherApp__header">
                    <h1>Tapmaan Yantra</h1>
                    <p className="subtitle">Search your city to view the latest temperature, humidity, and weather description in a polished dashboard.</p>
                </div>
                <div className="section-row">
                    <SearchBox updateInfo={updateInfo}/>
                    <InfoSearchbox info={weatherInfo}/>
                </div>
            </section>
        </main>
    );
}