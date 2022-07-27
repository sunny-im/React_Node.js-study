import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox'
import WeartherButton from './component/WeartherButton'
import ClipLoader from "react-spinners/ClipLoader";

// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  // 3. 버튼 5개 - 현재위치 / 다른도시 
  const cities = ['New York','Tokyo','Paris','Seoul'];
  // 6. 데이터 가져오는 동안 로딩스피너  
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재위치 : ", lat , lon)
      getWeatherByCurrentLocation(lat,lon);
    });
  };

  const getWeatherByCurrentLocation = async(lat,lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1390646e577d82047d347ae8e6d2c811&units=metric`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log("current data",data);
    setWeather(data);
    setLoading(false);
  }

  const getWeatherByCity= async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1390646e577d82047d347ae8e6d2c811&units=metric`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log("city data",data);
    setWeather(data);
    setLoading(false);
  }
  // 1. 앱이 실행되자마자 현재위치 기반의 날씨 
  useEffect(()=>{
    if(city==""){
      getCurrentLocation();
    } else {
      // 4. 버튼 클릭 시 각 도시의 날씨정보
        getWeatherByCity();
    }
  },[city]);

  
  // useEffect(()=>{
  //   console.log("city!!", city)
  //   getWeatherByCity();
  // },[city])

  return (
    <div>
      {loading ? (
      <div className="container">
        <ClipLoader color="#ff4563" loading={loading} size={150} />
      </div>
        ):(
      <div className="container">
        {/* 2. 날씨정보에는 도시, 섭씨, 화씨, 날씨상태 */}
        <WeatherBox weather={weather} />
        <WeartherButton cities={cities} setCity={setCity}/>
      </div>
        )}  
    </div>
  );
}

export default App;
