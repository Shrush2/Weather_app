import React, { useState } from 'react'; // Import useState from React
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState(""); // State to hold the city name
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6ad0085569f9fe583fb01bde2d13095b";

    // Fetch weather information based on the city
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );

            // Check if the response is OK (status code 200)
            if (!response.ok) {
                throw new Error("City not found");
            }

            let jsonResponse = await response.json(); // Parse the JSON response

            // Structure the weather data
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like, // Corrected property name
                weather: jsonResponse.weather[0].description,
            };

            console.log(result); // Log the weather data
            return result; // Return the weather info

        } catch (error) {
            console.error("Error fetching weather data:", error);
            return null; // Return null if there was an error
        }
    };

    // Handle changes in the text field
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    // Handle form submission
    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        let newInfo = await getWeatherInfo(); // Get new weather info
        if (newInfo) {
            updateInfo(newInfo); // Update the weather info in WeatherApp
        }
        setCity(""); // Clear the input field
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="City"
                    label="City Name"
                    variant="outlined"  
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}
