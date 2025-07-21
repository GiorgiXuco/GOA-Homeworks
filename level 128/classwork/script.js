function getWeatherApi() {
    return new Promise(function (resolve, reject) {
        resolve("snow")
    })
}

function getWeather(data) {
    if (data == "snow") {
        console.log("❄️")
    } else if (data == "sunny") {
        console.log("☀️")
    }
}

function error(data) {
    console.log('rejected => ' + data)
}

getWeatherApi().then(getWeather, error)