import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Digras",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 26.05,
        humidity: 47,
        weather: "haze",
    });

    // Corrected the state setter name
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo); // Ensure the correct setter is used
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Metro-Forecast</h2>
            <SearchBox updateInfo={updateInfo} /> {/* Pass function to update weather info */}
            <InfoBox info={weatherInfo} /> {/* Correctly passing weather info */}
        </div>
    );
}
