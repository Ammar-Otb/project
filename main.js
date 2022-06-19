async function getCity() {
  var cityName = document.getElementById("city").value;
  console.log(cityName);
  await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=af7ddd3322a14a1c588d8a42229c806b`
    ).then((resp)=> resp.json())
    .then((data)=> {
      document.getElementById("humidity").innerText = data["main"].humidity;
      document.getElementById("temp").innerText = data["main"].temp;
      document.getElementById("desc").innerText = data.weather[0].description;
    });
}
