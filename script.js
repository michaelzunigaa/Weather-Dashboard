var dailyForecast=$("#city-forecast");
var fiveDayFor=$("#five-day");


// 5 day forecastUrl
var country ="&units=imperial";
var searchButton= $(".search-btn");
var countrySearch ="&cnt=" + country;
var citySearch=$(".search-field");
var c1Search = "?q="+ citySearch;


var apiKey =  "&appid=71f7dc2d0e2f836f99f5a30cce61bd3c";
var hourlyUrl= "https://api.openweathermap.org/data/2.5/weather?" + c1Search + countrySearch+ apiKey;
var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=seattle&units=imperial&appid=71f7dc2d0e2f836f99f5a30cce61bd3c";
var fiveUrl ="api.openweathermap.org/data/2.5/forecast/daily?q=seattle&cnt=5&appid=71f7dc2d0e2f836f99f5a30cce61bd3c";






console.log(citySearch);









// getting the ajax call from our api site openweather

$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function(response) {
    searchButton.click(function(){
        event.preventDefault();
        var userCity= response.city.name;
        inputTextValue = userCity;
        $(inputTextValue).val("#search-bar");
        
        // var iconcode = response.weather[1].icon;
        // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        // $('#wicon').attr('src', iconurl);
    
    
    
    
    
    
        //getting all the information we need to give back to the user
        
        //   var hours = new Date().getHours();
        
        
        
        
        
        
        console.log(queryUrl);
        // hourly forecast url
        // console.log(hourlyUrl);
        
        //city  name
        var cityName= $("<h1>").text(response.city.name);
        
        //city   weather  condtion
        var weatherCon= $("<div>").text(response.list[1].weather[0]);
        
        //city    temperture
        var weatherTemp=$("<p>").text("Temperture: "+ response.list[0].main.temp + "f");
        
        //city    windspeed
        var windSpeed=$("<p>").text("Wind speed: "+response.list[0].wind.speed);
        
        //city humidity
        var weatherHumidity=$("<p>").text("Humidity: "+response.list[0].main.humidity);
        
        //appending the forecast to the body
        dailyForecast.append(weatherCon);
      weatherCon.append(cityName);
      weatherCon.append(weatherTemp);
      weatherCon.append(windSpeed);
      weatherCon.append(weatherHumidity);

      //call for the city UV index
      $.ajax({
          url:"http://api.openweathermap.org/data/2.5/uvi/forecast?appid=71f7dc2d0e2f836f99f5a30cce61bd3c&lat=47.6062&lon=-122.3321",
          method:"GET"
        }).then(function(uvdata){
            //city  UVindex
            var uvIndex= $("<p>").text("UV Index: "+uvdata[0].value);
            weatherCon.append(uvIndex);
            
            
            console.log(uvdata);
            console.log(uvIndex);
            
        });
        
    });
});
