document.getElementById("getWeather").addEventListener("click", () => {
    const city = document.getElementById("city").value;
    const apiKey = "61e5a9b81bb1cdd2829d21510792d4d2";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ka`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("ქალაქი ვერ მოიძებნა");
            }
            return response.json();
        })
        .then((data) => {
            const weatherInfo = `
            <p><strong>ქალაქი:</strong> ${data.name}</p>
            <p><strong>ტემპერატურა:</strong> ${data.main.temp}°C</p>
            <p><strong>აღწერა:</strong> ${data.weather[0].description}</p>`;
            document.getElementById("weatherResult").innerHTML = weatherInfo;
        })
        .catch((error) => {
            document.getElementById("weatherResult").innerHTML = `შეცდომა: ${error.message}`;
        });
});