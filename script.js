let date = new Date();


// 5 day forecastUrl
const country = "&units=imperial";
const searchButton = $("#city-search");

let city = $("#search-bar").val();
const apiKey = "&appid=71f7dc2d0e2f836f99f5a30cce61bd3c";



$("#search-bar").keypress(function (event) {

    if (event.keyCode === 13) {
        event.preventDefault();
        $("#city-search").click();
    }
});


$("#city-search").click(function (event) {
    event.preventDefault();
    city = $("#search-bar").val();


    const queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=71f7dc2d0e2f836f99f5a30cce61bd3c";
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (res) {
        $("#search-bar").val("");


        let userCity = res.city.name;
        let weatherCon = res.list[1].weather[0].main;
        let weatherConIcon = res.list[1].weather[0].icon;
        let cityTemp = Math.floor(res.list[0].main.temp);

        let windSpeed = res.list[0].main.temp;
        let humidity = res.list[0].main.humidity;
        // weather icon API response
        // let weatherIcon = res.list.weather.icon + ".png";

        // console.log(userCity, ",", "Weather Condition:", weatherCon, weatherConIcon, "Temp:", cityTemp, "Wind Speed:",
        //     windSpeed, "Humidity:", humidity);

        currentCondition(res);
        // currentForecast(res);
        searchList();

    });

});

function currentCondition(res) {
    // let userCity = res.city.name;
    // let weatherCon = res.list[1].weather[0].main;
    // let weatherConIcon = res.list[1].weather[0].icon;
    // let cityTemp = res.list[0].main.temp;
    // let windSpeed = res.list[0].main.temp;
    // let humidity = res.list[0].main.humidity;


    // $("#currentCity").empty();

    const card = $("<div>").addClass("card");
    const cardBody = $("<div>").addClass("card-body");

    const userCity = $("<h4>").addClass("card-title").text(res.city.name);
    console.log(res.city.name);

    // const cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));

    const temp = $("<p>").text("Temperature: " + res.list[0].main.temp + " °F");

    const condition = $("<p>").text(res.list[1].weather[0].main);

    const humidity = $("<p>").text("Humidity: " + res.list[0].main.humidity + "%");

    const wind = $("<p>").text("Wind Speed: " + res.list[0].main.temp + " MPH");

    const image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + res.list[1].weather[0].icon + ".png");

    userCity.append(image);
    cardBody.append(userCity, condition, temp, humidity, wind);
    card.append(cardBody);
    $("#currentCity").append(card);



}


// function currentForecast(res) {

// }

function searchList() {
    let searchItem = $("<li>").addClass("list-group-item").text(city);
    $(".list").append(searchItem);

}

// getting the ajax call from our api site openweather



// var iconcode = response.weather[1].icon;
// var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
// $('#wicon').attr('src', iconurl);






// //getting all the information we need to give back to the user

// //   var hours = new Date().getHours();






// // console.log(queryUrl);
// // hourly forecast url
// // console.log(hourlyUrl);

// //city  name
// var cityName = $("<h1>").text(res.city.name);

// //appending the forecast to the body
// dailyForecast.append(weatherCon);
// weatherCon.append(cityName);
// weatherCon.append(weatherTemp);
// weatherCon.append(windSpeed);
// weatherCon.append(weatherHumidity);


//call for the city UV index
//       $.ajax({
//           url:"http://api.openweathermap.org/data/2.5/uvi/forecast?appid=71f7dc2d0e2f836f99f5a30cce61bd3c&lat=47.6062&lon=-122.3321",
//           method:"GET"
//         }).then(function(uvdata){
//             //city  UVindex
//             var uvIndex= $("<p>").text("UV Index: "+uvdata[0].value);
//             weatherCon.append(uvIndex);


//             console.log(uvdata);
//             console.log(uvIndex);

//         });

//     });
// });