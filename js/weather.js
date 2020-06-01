// 2b94fe427ed9714194be7423e00dc64f  api_key

// async function getPlaces() {
//     var input = document.getElementById("input");
//     await new google.maps.places.Autocomplete(input);
// }

let input = document.querySelector("#input");

input.addEventListener("keyup", (e) => {
    e.preventDefault();
    let Search = e.target.value;
    Search_Weather(Search);
});

function Search_Weather(Search) {
    let weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=2b94fe427ed9714194be7423e00dc64f`;
    window
        .fetch(weatherApi)
        .then((data) => {
            data.json()
                .then((weatherData) => {
                    console.log(weatherData);
                    let weather = weatherData.weather;
                    // let main = weatherData.main;
                    output = [];
                    for (let a of weather) {
                        output += `
                        <div class="col-md-12 mt-4 card">
                        <div class="card-body">
                        <h1>${weatherData.name}</h1>
                        
                        <div>
                        <p class="icon">
                        <img src="http://openweathermap.org/img/wn/${a.icon}.png" /></p>
                        <p><span>temp:</span>
                        <span class="temp">${weatherData.main.temp}&deg;c</span></p>
                        
                        <p class="float-left">humidity: ${weatherData.main.humidity}</p>
                        <p class="des float-left">${a.description}</p>
                        <p class="des float-right">${a.main}</p>
                        </div>
                        
                        
                        </div>
                          </div>
                        
                        
                        
                        `;
                        document.getElementById("weather_Block").innerHTML=output
                        
                    }
                })
                .catch((err) =>console.log(err));
        })
        .catch((err) => console.log(err));
}
