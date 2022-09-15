import React from 'react'
import styled from 'styled-components'


const Weather = () => {

  return (
    <Grid>
    <div>
    <div class="container">
        <div class="app-title"><p>Weather</p></div>
        <div class="notification"></div>
        <div class="weather-container">
            <div class="weather-icon"><img src="./img/"/></div>
            <div class="temperature-value"><p>- °<span>C</span></p></div>
            <div class="temperature-description"><p> - </p></div>
            <div class="location"><p> - </p></div>
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
    background-color: #F4F9FF;
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