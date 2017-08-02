
/*var key = 1860b7a1ee6960eb7e3dc17c48febe4e; /api dark sky weather
var keyPhotos = 5fbb98ba0b09c0fc055f1550ca34da51; /api flickr */
function farenCelsius(clima){
	var valor = (clima - 32)*5/9;
	var celcius = valor.toFixed(1) + 'º';
	return celcius;
}

$(document).ready(function() {
	$.ajax({
		url: 'https://api.darksky.net/forecast/1860b7a1ee6960eb7e3dc17c48febe4e/-33.4569400,-70.6482700',
		type: 'GET',
		dataType: 'jsonp',
		data: {param1: 'value1'},
	})

	.done(function(forecast) {
			console.log(forecast);
			var clima = parseInt(forecast.currently.apparentTemperature);
			var icono = forecast.currently.summary;
			var humedad = forecast.currently.humidity;
			var lugar = forecast.timezone;
			var uv = forecast.currently.uvIndex;

			$('.ciudad').append(lugar);
			$('.grados').append(farenCelsius(clima));
			$('.icono').append(icono);
			$('.humedad').append(humedad + '%');
			$('.uv').append(uv);
	});
});

/* Descarga de la dependencia de dark sky, pero preferí ocupar el ajax ya que he trabajado mas con él y lo conosco	
    'use strict';
	const DarkSky = require('dark-sky')
	const forecast = new DarkSky('73ef9d7d2baa53b946c601e5a5ed7812')
	 
	forecast
	    .latitude('-33.4569400')            \\ required: latitude, string.
	    .longitude('-70.6482700')          \\ required: longitude, string.
	    .time('2017-08-28')             \\ optional: date, string 'YYYY-MM-DD'.
	    .units('ca')                    \\ optional: units, string, refer to API documentation.
	    .language('en')                 \\ optional: language, string, refer to API documentation.
	    .exclude('minutely,daily')      \\ optional: exclude, string, refer to API documentation.
	    .extendHourly(true)             \\ optional: extend, boolean, refer to API documentation.
	    .get()                          \\ execute your get request.
	    .then(res => {                  \\ handle your success response.
	        console.log(res)
	    })
	    .catch(err => {                 \\ handle your error response.
	        console.log(err)
	    })
    
});*/





