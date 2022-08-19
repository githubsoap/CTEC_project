const desc = document.getElementById("desc")

function showWeather() {    
	var request = new XMLHttpRequest();    
	request.open('GET', weather_url, true);   
	request.onload = function() { 
	weather = JSON.parse(request.responseText);  
	console.log(weather)
    displayWeather(weather);
};
request.send();}

function displayWeather(weather) {
	var desc = weather[0].description;
	var icon = weather[0].icon;
	weatherDetails.innerHTML = '<div class= "card-title p-2" style="text-align:center"><img src="http://openweathermap.org/img/wn/' + icon + '@4x.png"></div><div class= "card-body">Today there will be ' + desc + '.</div></div>';
}