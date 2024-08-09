import React from 'react'
import './WheatherApp.css'
import search_icon from '../assets/search.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import clear_icon from '../assets/clear.png'
import wind_icon from '../assets/wind.png'  


const WheatherApp=()=> {
    let apikey = '3a2a78531a7b49f493073ba9bc3b4c07';
    const [wicon, setWicon] = React.useState(cloud_icon);

    const searchCity = async () => {
        const element=document.getElementsByClassName('cityInput')[0];
        if(element.value===''){
            alert('Please enter city name');
            return;
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${apikey}`;
        const response = await fetch(url);
        // console.log(typeof(response));
        const data = await response.json();
        // console.log(typeof(data));
        console.log(data);

        const humidity=document.getElementsByClassName('humidity-percent')[0];
        const wind  =document.getElementsByClassName('wind-rate')[0];
        const temp  =document.getElementsByClassName('wheather-temp')[0];
        const location =document.getElementsByClassName('wheather-location')[0];

        humidity.innerHTML=data.main.humidity+'%';
        wind.innerHTML=data.wind.speed+' km/h';
        temp.innerHTML=data.main.temp+' ˚C';
        location.innerHTML=data.name;

        if(data.weather[0].icon==='01d' || data.weather[0].icon==='01n'){
            setWicon(clear_icon);
    }
    else if(data.weather[0].icon==='02d' || data.weather[0].icon==='02n'){
        setWicon(cloud_icon);
    }
    else if(data.weather[0].icon==='03d' || data.weather[0].icon==='03n'){
        setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon==='09d' || data.weather[0].icon==='09n'){
        setWicon(rain_icon);
    }
    else if(data.weather[0].icon==='10d' || data.weather[0].icon==='10n'){
        setWicon(rain_icon);
    }
    else if(data.weather[0].icon==='13d' || data.weather[0].icon==='13n'){
        setWicon(snow_icon);
    }
    else{
        setWicon(clear_icon);
    }
}
      return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput"  placeholder='search'/>
            <div className="search-icon" onClick={()=>{searchCity()}}>
                <img src={search_icon} alt="search_icon" />
            </div>
        </div>
        <div className="wheather-image">
            <img src={wicon} alt="" />
        </div>
        <div className="wheather-temp">24 C</div>
        <div className="wheather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon'/>
                <div className="data">
                    <div className="humidity-percent">34%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className='icon'/>
                <div className="data">
                    <div className="wind-rate">34%</div>
                    <div className="text">Wind speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WheatherApp