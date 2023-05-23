const APIKey = "8502824dfb63f186bc22e58f60e06fea";
const dropdown = document.getElementById('myDropdown');
dropdown.addEventListener('change', function () {
    const selectedValue = dropdown.value;
    console.log(selectedValue);
    getLatLon(selectedValue);
});

function getLatLon(cityName) {
    let request = new XMLHttpRequest();
    request.open("GET", `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${APIKey}`);
    request.send();
    request.onload = () => {
        console.log(request);
        if (request.status == 200) {
            const { lat, lon } = JSON.parse(request.response)[0];
            console.log(lat);
            console.log(lon);
            getWeatherData(lat,lon);
        }
        else {
            console.log(request.status);
            console.log(request.statusText);
        }
    }
}
function getWeatherData(lat,lon){
    let request = new XMLHttpRequest();
    request.open("GET", `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`);
    request.send();
    console.log(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`);
    request.onload = () => {
        console.log(request);
        if (request.status == 200) {
            const res = JSON.parse(request.response).list;
            var filteredList=[];
            res.forEach(element => {
               if(element.dt_txt.includes("09:00:00")){
                element.main.temp=convertToCelcius(element.main.temp);
                filteredList.push(element);
               } 
            });
            console.log(res);

            console.log(filteredList);
            imgIcon = `https://openweathermap.org/img/wn/${filteredList[0].weather[0].icon}@2x.png`;
            document.getElementById("date").innerText=getDay(filteredList[0].dt_txt);
            document.getElementById("degree").innerText=filteredList[0].main.temp +"°ᶜ";
            document.getElementById("img").src=`assets/images/${filteredList[0].weather[0].main}.png`;
            document.getElementById("img").src=imgIcon;
            document.getElementById("mood").innerText=filteredList[0].weather[0].description;
            document.getElementById("day1").innerText=filteredList[0].main.temp +"°ᶜ";
            document.getElementById("day11").innerText=getDay(filteredList[0].dt_txt);
            document.getElementById("day2").innerText=filteredList[1].main.temp +"°ᶜ"
            document.getElementById("day21").innerText=getDay(filteredList[1].dt_txt);
            document.getElementById("day3").innerText=filteredList[2].main.temp +"°ᶜ"
            document.getElementById("day31").innerText=getDay(filteredList[2].dt_txt);
            document.getElementById("day4").innerText=filteredList[3].main.temp +"°ᶜ"
            document.getElementById("day41").innerText=getDay(filteredList[3].dt_txt);
            document.getElementById("day5").innerText=filteredList[4].main.temp +"°ᶜ"
            document.getElementById("day51").innerText=getDay(filteredList[4].dt_txt);

            
        }
        else {
            console.log(request.status);
            console.log(request.statusText);
        }
    }
}

function convertToCelcius(kelvin){
    var celsius = kelvin - 273.15;
    return parseInt(celsius);
}
function getDay(date){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "ThursDay", "Friday", "Saturday"]
    const d = new Date(date);
    let day = days[d.getDay()];
    return day.substring(0,3);
}