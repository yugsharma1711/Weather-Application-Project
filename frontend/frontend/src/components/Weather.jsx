import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
const Weather = ()=>{
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [date, setDate] = useState();
    var d = new Date((new Date().getTime()))
    d = d.toISOString()
    const searchLocation = async (event) => {
        console.log(event.target.value);
        if (event.key === 'Enter') {
          await axios.get(`http://127.0.0.1:8000/api/fetchWeather/${event.target.value}/`).then((response) => {
            setData(response.data);
            console.log(response.data);
            // console.log(typeof response.data.timezone)
            const timezoneOffset = response.data.timezone * 1000;
            const updatedDate = new Date(Date.now() + timezoneOffset).toISOString();
            setDate(updatedDate);
        });
        
          setLocation('');
        }
      };
      useEffect(() => {
        const interval = setInterval(() => {
          const currentTime = new Date();
          const updatedDate = new Date(currentTime.getTime() + (data.timezone * 1000)).toISOString();
          setDate(updatedDate);
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, [data]);
      const formatTime = (timeString) => {
        const options = {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12 : 'false'
        };
        return new Date(timeString).toLocaleTimeString('en-us');
      };
      const formatDate = (timeString) => {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
        };
        return new Date(timeString).toLocaleDateString(undefined, options);
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
                        {data.sys && (
                            <div>
                                Current Date: {formatDate(date)}
                                <br />
                                Current Time: {formatTime(date)}
                                
                            </div>
                            )
                        }
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