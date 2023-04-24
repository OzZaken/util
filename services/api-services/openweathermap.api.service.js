import { httpService } from "../http.service"
import NodeCache from 'node-cache';

export const weatherService = { getWeather }

// ---------------------------------   simple to work fast from frontend  
function _getWeather(lat, lng) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ff9107689551acc4da747779b7fb17fa&units=metric`
    return httpService.get(url)
        .then(url => url.data)
        .then(res => {
            console.log('res:', res)
            return {
                temp: res.main.temp,
                feelsLike: res.main.feels_like,
                humidity: res.main.humidity,
                description: res.weather[0].description,
                name: res.name
            }
        })
}

// ---------------------------------   Server side cache   ---------------------------------  
const { httpService } = require("./http.service")
const logger = require('./logger.service')

const weatherCache = {}

async function getCurrentWeather(lat, lng) {
    // first look on internal cache memory
    const cacheKey = `${lat},${lng}`
    const cachedData = weatherCache[cacheKey]
    if (cachedData) return cachedData

    // if isn't exists on cache fetch using httpService 
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
    const queryParams = {
        lat,
        lng,
        apiKey: process.env.OPEN_WEATHER_MAP,
        units: 'metric'
    }
    const url = baseUrl + objectToQueryString(queryParams)
    try {
        const res = await httpService.get(url)
        const { data } = res
        const formatData = _formatWeather(data)

        weatherCache[cacheKey] = formatData
        logger.log("Caching weather data for", cacheKey)

        return formatData
    } catch (error) {
        logger.error("Error getting weather:", error)
        throw new Error("Unable to get weather data.")
    }
}
function getQueryStringFromObj(obj) {
    return '?' + Object.keys(obj)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .join("&")
}
function _formatWeather(data) {
    const { name } = data
    const { temp, feels_like, humidity } = data.main
    const { description, icon } = data.weather[0]
    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`

    return {
        name,
        temp,
        feelsLike: feels_like,
        humidity,
        description,
        iconUrl,
    }
}

module.exports = { getCurrentWeather }

// ---------------------------------   Server using node-cache  (TS) ---------------------------------
const CACHE_TTL = 60 * 60 // Cache for 1 hour
const cache = new NodeCache({ stdTTL: CACHE_TTL })

async function getWeather(lat, lng) {
    const cacheKey = `${lat},${lng}`
    const cachedWeather = cache.get(cacheKey)
    if (cachedWeather) {
        console.log(`Retrieving weather for ${cacheKey} from cache`)
        return cachedWeather
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    try {
        const response = await httpService.get(url);
        const { data } = response;
        const { name } = data;
        const { temp, feels_like, humidity } = data.main;
        const { description, icon } = data.weather[0];
        const weatherData = {
            name,
            temp,
            feelsLike: feels_like,
            humidity,
            description,
            iconUrl: icon
        };
        cache.set(cacheKey, weatherData);
        console.log(`Caching weather for ${cacheKey}`);
        return weatherData;
    } catch (error) {
        console.error('Error getting weather:', error);
        throw new Error('Unable to get weather data.');
    }
}
// ---------------------------------   Server using cacheService ---------------------------------
const CashService = require('./cash.service')
const cacheService = new CashService(300) // Set TTL to 5 minutes (300 seconds)

async function getCurrentWeather(lat, lng) {
    // Look for cached data
    const cacheKey = `${lat},${lng}`
    const cachedData = await cacheService.get(cacheKey, async () => {
        // Data is not cached, fetch it using httpService
        const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
        const queryParams = {
            lat,
            lng,
            apiKey: process.env.OPEN_WEATHER_MAP,
            units: 'metric'
        }
        const url = baseUrl + objectToQueryString(queryParams)
        try {
            const res = await httpService.get(url)
            const { data } = res
            const formatData = _formatWeather(data)
            logger.log("Caching weather data for", cacheKey)
            return formatData
        } catch (error) {
            logger.error("Error getting weather:", error)
            throw new Error("Unable to get weather data.")
        }
    })

    return cachedData
}

// ---------------------------------     Client

async function getWeather(lat, lng) {
    const cacheKey = `weather-${lat}-${lng}`
    let cachedData = getWeatherFromLocalStorage(cacheKey)
    if (cachedData) return cachedData

    try {
        const response = await httpService.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        );
        const { data } = response;
        const { name } = data;
        const { temp, feels_like, humidity } = data.main;
        const { description, icon } = data.weather[0];
        const weatherData = {
            name,
            temp,
            feelsLike: feels_like,
            humidity,
            description,
            iconUrl: icon,
        }
        saveWeatherToLocalStorage(cacheKey, weatherData);
        return weatherData;
    } catch (error) {
        console.error("Error getting weather:", error);
        throw new Error("Unable to get weather data.");
    }
}

function getWeatherFromLocalStorage(cacheKey) {
    const cachedString = localStorage.getItem(cacheKey)
    if (!cachedString) return null

    const cachedData = JSON.parse(cachedString)
    if (isCacheExpired(cachedData.timestamp)) {
        localStorage.removeItem(cacheKey)
        return null
    }

    return cachedData.data
}

function saveWeatherToLocalStorage(cacheKey, data) {
    const cacheTime = new Date().getTime()
    const cacheData = { data, timestamp: cacheTime }
    localStorage.setItem(cacheKey, JSON.stringify(cacheData))
}

function isCacheExpired(timestamp) {
    const expirationTime = 60 * 1000 // cache is valid for 1 minute
    const now = new Date().getTime()
    return now - timestamp > expirationTime
}

// ---------------------------------   Forecast   ---------------------------------  
async function getWeatherForecast(lat, lng) {
    _setQueryParams({ lat, lng })
    try {
        const url = baseUrl + objectToQueryString(queryParams);
        const res = await httpService.get(url);
        const forecasts = res.data.list.map(forecast => {
            const { dt_txt } = forecast
            const { temp, feels_like, humidity } = forecast.main
            const { description, icon } = forecast.weather[0]
            const iconUrl = `https://openweathermap.org/img/w/${icon}.png`

            return {
                time: dt_txt,
                temp,
                feelsLike: feels_like,
                humidity,
                description,
                iconUrl,
            }
        })
        return forecasts
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch weather forecast data');
    }
}