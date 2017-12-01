import axios from 'axios';

const API_KEY = '92ab73b09a66acc7239e8e8286a0e47d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log('Request : ', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
