// get All HTML Elements
let countryName = document.querySelector(".country-name");
let temperatureNumber = document.querySelector("span.number");
let temperatureIcon = document.querySelector("img.icon");
let speenWind = document.querySelector(".wind-speed");
let timeZone = document.querySelector('.time-zone')
let date = document.querySelector(".date");
window.onload = function () {

    // getWeather();
      getLocation();
  
};
// function getWeather() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;

//       console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//       axios
//         .get(
//           `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=884ef4442e014d868a100de27944db54&include=minutely`
//         )
//         .then((response) => {
//           temperatureNumber.textContent = response.data.data[0].app_temp;
//           countryName.textContent = response.data.data[0].city_name;
//           temperatureIcon.src = `https://cdn.weatherbit.io/static/img/icons/${response.data.data[0].weather.icon}.png`;
//           speenWind.textContent = response.data.data[0].wind_spd;
//           date.textContent = response.data.data[0].datetime.slice(0, 10);
//           timeZone.textContent = response.data.data[0].timezone
//           console.log(response.data.data[0]);
//         });
//     });
//   } else {
//     console.log("Geolocation is not supported by this browser.");
//   }
// }
function getLocation() {
  axios
    .get(
      "https://api.geoapify.com/v1/ipinfo?apiKey=bf7a77d2b79047218982a62cf9cd424e"
    )
    .then((response) => {
      latitude = response.data.location.latitude;
      longitude = response.data.location.longitude;

      axios
        .get(
          `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=884ef4442e014d868a100de27944db54&include=minutely`
        )
        .then((response) => {
          temperatureNumber.textContent = response.data.data[0].app_temp;
          countryName.textContent = response.data.data[0].city_name;
          temperatureIcon.src = `https://cdn.weatherbit.io/static/img/icons/${response.data.data[0].weather.icon}.png`;
          speenWind.textContent = response.data.data[0].wind_spd;
          date.textContent = response.data.data[0].datetime.slice(0, 10);
          timeZone.textContent = response.data.data[0].timezone;
          console.log(response.data.data[0]);
        });
    });
}
