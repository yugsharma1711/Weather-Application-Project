import axios from 'axios'
import { useState } from 'react';
const Weather = ()=>{
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const searchLocation = async (event) => {
        console.log(event.target.value);
        if (event.key === 'Enter') {
          await axios.get(`http://127.0.0.1:8000/api/fetchWeather/${event.target.value}/`).then((response) => {
            setData(response.data);
            console.log(response.data);
          });
          setLocation('');
        }
      };
    return (
        <>
            <div className="search">
                <input
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder='Enter Location'
                type="text" />
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name} {data.sys ? <p style = {{'font-size' : '20px'}}>{data.sys.country}</p> : null}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>
                {data.name !== undefined &&
                <div className="bottom">
                    <div className="feels">
                        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} KPH</p> : null}
                        <p>Wind Speed</p>
                    </div>
                </div>
        }
        </div>
    </>
    );
}
export default Weather;