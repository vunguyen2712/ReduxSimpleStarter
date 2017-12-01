import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData){
        const cityName = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;
        const { lon, lat } = cityData.city.coord; // same as 2 lines above

        console.log(temps);
        return (
            <tr key={cityName}>
                <td>
                    <GoogleMap lat={lat} lon={lon} />
                </td>
                <td>
                    <Chart data={temps} color='red' units='K'/>
                </td>
                <td>
                    <Chart data={pressures} color='green' units='sPA' />
                </td>
                <td>
                    <Chart data={humidity} color='black' units='%' />
                </td>
            </tr>
        );
    }
    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th> City </th>
                        <th> Temperature (K) </th>
                        <th> Pressure (hPA)</th>
                        <th> Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return { weather };
}

// this is the above ^^
// function mapStateToProps(state){
//     return { weather: state.weather };
// }

export default connect(mapStateToProps)(WeatherList);
