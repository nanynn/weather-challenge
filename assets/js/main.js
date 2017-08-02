

//var key = 73ef9d7d2baa53b946c601e5a5ed7812; //api dark sky weather
var clima = function(){
	$.ajax({
	url: 'https://api.darksky.net/forecast/73ef9d7d2baa53b946c601e5a5ed7812/-33.4569400,-70.6482700',
	type: 'GET',
	dataType: 'jsonp',
	data: {param1: 'value1'},
	})
	.done(function() {
		console.log(currently);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
}


	

$(document).ready(function() {
	

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





