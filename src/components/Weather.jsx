import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Header from './Header';



const Weather = ({input}) => {
    console.log(input);

    const key = 'b92fc960e148cadebcf419efb66dd6d4';
    const KELVIN = 273;

    const [weather, setWeather] = useState({})
    const [temp, setTemp] = useState("")
    const [data, setData] = useState({})
    
    useEffect(() => {
        let value = true;
        getLocation();
          return () => {
              value = false;
          }
      }, [input])

    useEffect(() => {
      let value = true;
        getWeather(6.497892, 3.382923)
        return () => {
            value = false;
        }
    }, [])


    const getLocation = () => {
        let api = `https://api.geoapify.com/v1/geocode/search?text=${input}&format=json&apiKey=66c44e5a39034874a2bba35da1759a47`;

        fetch(api)
          .then((res) => {
            let data = res.json();
            return data;
          })
          .then((data) => {
            console.log(data.results[0].lon, data.results[0].lat);
            getWeather(data.results[0].lat, data.results[0].lon);
          });
      } 
    
    
    const getWeather = (latitude, longitude) => {
       let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

       fetch(api)
         .then(function (response) {
           let data = response.json();
           return data;
         })
         .then(function (data) {
           console.log(data);
           setData(data);
           setWeather(data.weather[0]);
           setTemp(Math.floor(data.main.temp - KELVIN));
           // weather.temperature.value = Math.floor(data.main.temp - KELVIN);
           // weather.description = data.weather[0].description;
           // weather.iconId = data.weather[0].icon;
           // weather.city = data.name;
           // weather.country = data.sys.country;
         });
    }
    
  return (
    <Grid>
    <div>
    <div className="container">
        <div className="app-title"><p>Weather</p></div>
        <div className="notification"></div>
        <div className="weather-container">
            <div className="weather-icon"><img src={weather.icon ? `/img/${weather.icon}.png` : '/img/unknown.png'}/></div>
            <div className="temperature-value"><p>{temp ? temp : "-"} °<span>C</span></p></div>
            <div className="temperature-description"><p>{weather.description ? weather.description : "-"}</p></div>
            <div className="location"><p> {data.name}</p></div>
        </div>
    </div> 
    </div>

    </Grid>

    
  );
}
const Grid = styled.div `
.container{
    width: 300px;    
    background-color: #FFF;
    
    display: block;
    margin: 0 auto;
    
    border-radius: 10px;
    padding-bottom : 50px;
    border: 2px solid black
}

.app-title{
    width: 300px;
    height: 50px;
    border-radius: 10px 10px 0 0;
}

.app-title p{
    text-align: center;
    padding: 15px;
    margin: 0 auto;
    font-size: 1.2em;
    color: #293251;
}

.notification{
    background-color: #f8d7da;
    display: none;
}

.notification p{
    color: #721c24;
    font-size: 1.2em;
    margin: 0;
    text-align: center;
    padding: 10px 0;
}

.weather-container{
    width: 300px;
    height: 260px;
    background-color: #fff;
}

.weather-icon{
    width: 300px;
    height: 128px;
}

.weather-icon img{
    display: block;
    margin: 0 auto;
}

.temperature-value{
    width: 300px;
    height:60px;
}

.temperature-value p{
    padding: 0;
    margin: 0;
    color: #293251;
    font-size: 4em;
    text-align: center;
    cursor: pointer;
}

.temperature-value span{
    color: #293251;
    font-size: 0.5em;
}


.temperature-description p{
    padding: 8px;
    margin: 0;
    color: #293251;
    text-align: center;
    font-size: 1.2em;
}


.location p{
    margin: 0;
    padding: 0;
    color: #293251;
    text-align: center;
    font-size: 0.8em;
}
`

export default Weather