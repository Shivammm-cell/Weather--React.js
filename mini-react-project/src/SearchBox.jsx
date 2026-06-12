import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "64dae39cf02b010a82dcfdfb31f9e5a3";

    let getWeatherInfo = async () => {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const jsonResponse = await response.json();

        if (!response.ok) {
            throw new Error(jsonResponse.message || "Unable to find that city.");
        }

        return {
            City: city,
            Temperature: jsonResponse.main.temp,
            Temp_Min: jsonResponse.main.temp_min,
            Temp_Max: jsonResponse.main.temp_max,
            FeelsLike: jsonResponse.main.feels_like,
            Humidity: jsonResponse.main.humidity,
            Weather: jsonResponse.weather[0].description,
        };
    }




    let handleInput = (event) => {
        setCity(event.target.value)

    }

    let handleInputSubmit = async (event) => {
        event.preventDefault();
        setError("");

        try {
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch(err) {
            setError(err.message || "No Place Exists");
        }



    }
    return (
        <div className='SearchBox'>
            <form onSubmit={handleInputSubmit}>

                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleInput} />
                <Button className="search-button" variant="contained" type='submit' >
                    Search
                </Button>
                {error && <p className="error">{error}</p> }
               
            </form>
        </div>
    );
}