$.getJSON("https://api.openweathermap.org/data/2.5/weather?id=1254163&units=metric&appid=5e04adfe07c1c742dbf5978be28109de", function(data){
    console.log(data);
    let weather = data.weather[0].main;
    let temp = data.main.temp + "°C";
    let icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    let city = data.name;
    let feel = data.main.feels_like + "°C";
    let wind = data.wind.speed + " m/s";
    let humidity = data.main.humidity + "%";
    $(".weather").append(weather);
    $(".temp").append(temp);
    $(".icon").attr("src",icon);
    $(".city").append(city);
    $(".feel").append(feel);
    $(".wind").append(wind);
    $(".humidity").append(humidity);
});
