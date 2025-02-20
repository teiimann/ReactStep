import React, { useState } from "react";
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import cloudvid from '../assets/videos/cloudvid.mp4';
import drizzlevid from '../assets/videos/drizzlevid.mp4';
import rainvid from '../assets/videos/rainvid.mp4';
import snowvid from '../assets/videos/snowvid.mp4';


const Weather = () => {
    const [weatherData, setWeatherData] = useState({
        humidity: null,
        windSpeed: null,
        temperature: null,
        location: '',
        icon: clear_icon,
        background: cloudvid
    });

    const [city, setCity] = useState('');

    const allIcons = {
        "O1n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "O3n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon
    };

    const allBackgrounds = {
        "O1n": cloudvid,
        "02d": cloudvid,
        "02n": cloudvid,
        "03d": cloudvid,
        "O3n": cloudvid,
        "04d": drizzlevid,
        "04n": drizzlevid,
        "09d": rainvid,
        "09n": rainvid,
        "10d": rainvid,
        "10n": rainvid,
        "13d": snowvid,
        "13n": snowvid
    };

    const search = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch(url);
            const data = await response.json();
            const Icon = allIcons[data.weather[0].icon] || clear_icon;
            const Background = allBackgrounds[data.weather[0].icon] || cloudvid;

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: Icon,
                background: Background
            });
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    return (
        <div className="weather">
            <video
                autoPlay
                loop
                muted
                className="background-video"
                key={weatherData.background} 
            >
                <source src={weatherData.background} type="video/mp4" />
            </video>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <img src={search_icon} alt="Search" onClick={search} />
            </div>

            <img src={weatherData.icon} className="weather-icon" alt="Weather Icon" />
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
                <div className="col">
                    <img src={humidity_icon} alt="Humidity" />
                    <div>
                        <p>{weatherData.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col">
                    <img src={wind_icon} alt="Wind" />
                    <div>
                        <p>{weatherData.windSpeed} m/s</p>
                        <span>Wind</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
