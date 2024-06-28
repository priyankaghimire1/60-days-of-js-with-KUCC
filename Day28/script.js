const city = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const humid = document.querySelector(".humid");
const button = document.querySelector(".search");
const currentWeatherDiv = document.querySelector(".weather");
const input = document.querySelector(".name");
const icon=document.querySelector(".icon");
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="debca309e5dbac953f2581f5f8d7bd8f"
async function checkWeather(input){
    const response=await fetch(apiUrl+input+`&appid=${apiKey}`);
    var weather = await response.json();
    console.log(weather);
    document.querySelector(".cityName").innerHTML=weather.name;
    document.querySelector(".temp").innerHTML=Math.round(weather.main.temp);
    document.querySelector(".wind").innerHTML=weather.wind.speed;
    document.querySelector(".humid").innerHTML=weather.main.humidity;   
    if(weather.weather[0].main=="Clouds"){
        icon.src="img\\clear-sky.png";   
    }
    else if (weather.weather[0].main=="Clear"){
        icon.src="img\\sun.png";   
    }
    else if(weather.weather[0].main=="Rain"){
        icon.src="img\\rainy.png";   
    }
    else if(weather.weather[0].main=="Drizzle"){
        icon.src="img\\rain-day.png"; 
    }
    else if(weather.weather[0].main=="Mist"){
        icon.src="img\\fog.png";   
    }
    else if(weather.weather[0].main=="Snow"){
        icon.src="img\\snowflake.png";   
    }


}
document.querySelector(".search").addEventListener("click", ()=>{
    checkWeather(input.value);
}
)