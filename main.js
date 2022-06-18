
function getCity(){
    let city = document.getElementById("city").value;
    return city;
}

async function weather(){
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${getCity()}&units=metric&appid=af7ddd3322a14a1c588d8a42229c806b`
    );
    let info= await data.json();
    return info
}



document.querySelector("#searchBtn").addEventListener('click', ()=> {
        document.getElementById("humidity").innerText = weather.main.humidity;
        document.getElementById("temp").innerText = weather.main.temp;
        document.getElementById("humidity").innerText = weather.weather.description;
});



