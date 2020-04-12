const dailyForecast = $("#city-forecast");
const fiveDayFor = $("#five-day");


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
        let weatherCon = res.list[1].weather[0];
        let cityTemp = res.list[0].main.temp;
        let windSpeed = res.list[0].main.temp;
        let humidity = res.list[0].main.humidity;

        console.log(userCity,",", "Weather Condition:", weatherCon, "City Temp:", cityTemp, "Wind Speed:",
            windSpeed, "Humidity:", humidity);




    });





});

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

// }).then(function (response) {
//     console.log(response);
//     var newDiv = $("<div>")
//     var newH3 = $("<h3>");
//     var imdbInfoP = $("<p>");
//     var newIMG = $("<img>");
//     newH3.text(response.Title)
//     imdbInfoP.html("IMDB rating: " + response.imdbRating + " // votes: " + response.imdbVotes + "<br>" + response.Year + "<br>" + response.Rated + "<br>" + response.Plot)
//     newIMG.attr("class", "poster");
//     newIMG.attr("src", response.Poster);
//     newDiv.append(newH3);
//     newDiv.append(imdbInfoP);
//     newDiv.append(newIMG);
//     newDiv.addClass("content-box animated slideInRight")
//     imdbEL.append(newDiv);
// });

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