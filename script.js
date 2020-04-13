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
        fiveDayForecast(res);
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


    $("#currentCity").empty();

    const card = $("<div>").addClass("card");
    const cardBody = $("<div>").addClass("card-body");

    const userCity = $("<h4>").addClass("card-title").text(res.city.name);
    console.log(userCity);

    const cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));

    const temp = $("<p>").text("Temperature: " + res.list[0].main.temp + " °F");

    const condition = $("<p>").text(res.list[1].weather[0].main);

    const humidity = $("<p>").text("Humidity: " + res.list[0].main.humidity + "%");

    const wind = $("<p>").text("Wind Speed: " + res.list[0].main.temp + " MPH");

    const image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + res.list[1].weather[0].icon + ".png");

    userCity.append(cityDate, image);
    cardBody.append(userCity, condition, temp, humidity, wind);
    card.append(cardBody);
    $("#currentCity").append(card);



}


function fiveDayForecast(res) {
    const fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=5" + "&units=imperial&appid=71f7dc2d0e2f836f99f5a30cce61bd3c";

    $.ajax({
        url: fiveDayUrl,
        method: "GET"
    }).then(function (res) {
        const results = res.list;

        for (let i = 0; i < results.length; i++) {
            let days = Number(results[i].dt_txt.split('-')[2].split(' ')[0]);
            let hour = results[i].dt_txt.split('-')[2].split(' ')[1];
            console.log(days);
            console.log(hour);

            if (results[i].dt_txt.indexOf("12:00:00") !== -1) {

                // get the temperature and convert to fahrenheit 

                let tempF = Math.floor(temp);

                const card = $("<div>")("card col-md-2 ml-4 bg-primary text-black");
                const cardBody = $("<div>").addClass("card-body p-3 forecastBody");
                const cityDate = $("<h4>").text(date.toLocaleDateString('en-US'));
                const temperature = $("<p>").text("Temperature: " + tempF + " °F");
                const humidity = $("<p>").text("Humidity: " + results[i].main.humidity + "%");

                const image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results[i].weather[0].icon + ".png")

                cardBody.append(cityDate, image, temperature, humidity);
                card.append(cardBody);
                $("#forecast").append(card);

            }

        }




        console.log(res);
    });
}

function searchList() {
    let searchItem = $("<li>").addClass("list-group-item").text(city);
    $(".list").append(searchItem);





}
