//Taking value from search box
function searchme(){
    var inputdata1=document.getElementById("input1").value;
    var finaldata1=inputdata1.toLowerCase();

// Outer fetch it will bring the longitudes and latitudes by city name
//Outer fetch Starts Here
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${finaldata1}&limit=5&appid=485de61e53bce5b68ad2ee73b2059771`)
    .then(function(data){
    return data.json()
    })
    .then(function(data){
    console.log(data.at(0).lat)
    console.log(data.at(0).lon)
// console.log(data.main.temp)


// inner fetch it will bring data of city

//Inner Fetch Starts here
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.at(0).lat}&lon=${data.at(0).lon}&appid=3c59b04b788b6c1d8c3cd42c136e73b1&units=metric`)
        .then(function(data1){
         return data1.json()
         })
        .then(function(data1){
        console.log(data1)
        // Total weather available by API
        var weatheroptions="ThunderstormDrizzleRainSnowMistSmokeHazeDustFogSandDustAshSquallTornadoClearClouds"
        //Getting vakue of temp and setting values
        var temp1=data1.main.temp;
        if(temp1>=0&&temp1<=10){
        document.getElementById("logo12").src="images/tempicons/low.png";
        }
        else if(temp1>10&&temp1<=38){
        document.getElementById("logo12").src="images/tempicons/med.png";
        }
        else{
        document.getElementById("logo12").src="images/tempicons/high.png";

        }
    //Temp Code Ends here

    // Getting weather data and applying conditions
        var weather1=(data1.weather.at(0).main);
        console.log(weather1)
        if(weather1=="Clear"){
        document.getElementById("logo22").src="images/weathericons/clear.png";
        document.body.style.backgroundImage = "url(images/weathericons/clear1.gif)";
        
        }
        else if(weather1=="Tornado"){
        document.getElementById("logo22").src="images/weathericons/tornado.png";
        }
        else if(weather1=="Clouds"){
        document.getElementById("logo22").src="images/weathericons/clouds.png";
        document.body.style.backgroundImage = "url(images/weathericons/clouds1.gif)";
        }
        else if(weather1=="Thunderstorm"){
        document.getElementById("logo22").src="images/weathericons/thunderstorm.png";
        document.body.style.backgroundImage = "url(images/weathericons/thunderstorm1.gif)";
        }
        else if(weather1=="Drizzle"){
        document.getElementById("logo22").src="images/weathericons/drizzle.png";
        document.body.style.backgroundImage = "url(images/weathericons/drizzle1.gif)";
        }
        else if(weather1=="Rain"){
        document.getElementById("logo22").src="images/weathericons/rain.png";
        document.body.style.backgroundImage = "url(images/weathericons/rain1.gif)";
        }
        else if(weather1=="Snow"){
        document.getElementById("logo22").src="images/weathericons/snow.png";
        document.body.style.backgroundImage = "url(images/weathericons/snow1.gif)";
        }
        else if(weather1=="Mist"){
        document.getElementById("logo22").src="images/weathericons/mist.png";
        document.body.style.backgroundImage = "url(images/weathericons/mist2.gif)";
        
        }
        else if(weather1=="Smoke"){
        document.getElementById("logo22").src="images/weathericons/smoke.png";
        document.body.style.backgroundImage = "url(images/weathericons/smoke5.gif)";
        }
        else if(weather1=="Dust"){
        document.getElementById("logo22").src="images/weathericons/dust.png";
        document.body.style.backgroundImage = "url(images/weathericons/dust1.gif)";
        }
        else if(weather1=="Fog"){
        document.getElementById("logo22").src="images/weathericons/fog.png";
        document.body.style.backgroundImage = "url(images/weathericons/smoke5.gif)";
        }
        else if(weather1=="Sand"){
        document.getElementById("logo22").src="images/weathericons/sand.png";
        document.body.style.backgroundImage = "url(images/weathericons/sand1.gif)";
        }
        else if(weather1=="Ash"){
        document.getElementById("logo22").src="images/weathericons/sand.png";
        document.body.style.backgroundImage = "url(images/weathericons/sand1.gif)";
        }
        else if(weather1=="Squall"){
        document.getElementById("logo22").src="images/weathericons/squall.png";
        document.body.style.backgroundImage = "url(images/weathericons/smoke5.gif)";
        }
        else if(weather1=="Haze"){
        document.getElementById("logo22").src="images/weathericons/haze.png";
        document.body.style.backgroundImage = "url(images/weathericons/mist2.gif)";
        }
        else{
         document.getElementById("logo22").src="images/weathericons/clear.png";
         document.body.style.backgroundImage = "url(images/weathericons/clear1.gif)";
        }
        // weather codes end here
        var humidity=(data1.main.humidity);
        //Wind code and condition starts here

        var wind=(data1.wind.speed)
        if(wind>=0&&wind<1){
            document.getElementById("logo42").src="images/windspeed/wind-beaufort-0.svg";
        }

        else if(wind>=1&&wind<2){
            document.getElementById("logo42").src="images/windspeed/wind-beaufort-1.svg";
        }
        else if(wind>=2&&wind<3){
            document.getElementById("logo42").src="images/windspeed/wind-beaufort-2.svg";
        }
        else if(wind>=3&&wind<4){
            document.getElementById("logo42").src="images/windspeed/wind-beaufort-3.svg";
        }
        else if(wind>=4&&wind<5){
            document.getElementById("logo42").src="images/windspeed/wind-beaufort-4.svg";
        }
        else if(wind>=5&&wind<6){
            document.getElementById("logo42").src="images/windspeed/wind-beaufort-5.svg";
        }
        else if(wind>=6&&wind<7){
            document.getElementById("logo42").src="images/windspeed/wind-beaufort-6.svg";
        }
        else if(wind>=7&&wind<8){
            document.getElementById("logo42").src="images/windspeed/wind-beaufort-7.svg";
        }
        else if(wind>=8&&wind<9){
            document.getElementById("logo42").src="images/windspeed/wind-beaufort-8.svg";
        }
        else if(wind>=9&&wind<10){
            document.getElementById("logo42").src="images/windspeed/wind-beaufort-9.svg";
        }
        else if(wind>=10&&wind<11){
            document.getElementById("logo42").src="images/windspeed/wind-beaufort-10.svg";
        }
        else if(wind>=11&&wind<12){
            document.getElementById("logo42").src="images/windspeed/wind-beaufort-11.svg";
        }
        else{
            document.getElementById("logo42").src="images/windspeed/wind-beaufort-12.svg";
        }

        document.getElementById("temp").innerHTML=temp1;
        document.getElementById("weather").innerHTML=weather1;
        document.getElementById("humidity").innerHTML=humidity+"%";
         document.getElementById("speed").innerHTML=wind;
        })

// .catch(function(err){
//     console.log(err)
// })


})
.catch(function(err){
    console.log(err)
})
}
//Function Ends here