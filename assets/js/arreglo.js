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

.done(function(forecast){
		console.log(forecast.daily.data[0].apparentTemperatureMax)

		var mieMax = forecast.daily.data[0].apparentTemperatureMax;
		var mieMin = forecast.daily.data[0].apparentTemperatureMin;

		var jueMax = forecast.daily.data[1].apparentTemperatureMax;
		var jueMin = forecast.daily.data[1].apparentTemperatureMin;

		var vieMax = forecast.daily.data[2].apparentTemperatureMax;
		var vieMin = forecast.daily.data[2].apparentTemperatureMin;

		var sabMax = forecast.daily.data[3].apparentTemperatureMax;
		var sabMin = forecast.daily.data[3].apparentTemperatureMin;

		var domMax = forecast.daily.data[4].apparentTemperatureMax;
		var domMin = forecast.daily.data[4].apparentTemperatureMin;

		var lunMax = forecast.daily.data[5].apparentTemperatureMax;
		var lunMin = forecast.daily.data[5].apparentTemperatureMin;

		var marMax = forecast.daily.data[6].apparentTemperatureMax;
		var marMin = forecast.daily.data[6].apparentTemperatureMin;

		$('.lunMax').append(farenCelsius(lunMax));
		$('.lunMin').append(farenCelsius(lunMin));

		$('.marMax').append(farenCelsius(marMax));
		$('.marMin').append(farenCelsius(marMin));

		$('.mieMax').append(farenCelsius(mieMax));
		$('.mieMin').append(farenCelsius(mieMin));

		$('.jueMax').append(farenCelsius(jueMax));
		$('.jueMin').append(farenCelsius(jueMin));

		$('.vieMax').append(farenCelsius(vieMax));
		$('.vieMin').append(farenCelsius(vieMin));

		$('.sabMax').append(farenCelsius(sabMax));
		$('.sabMin').append(farenCelsius(sabMin));

		$('.domMax').append(farenCelsius(domMax));
		$('.domMin').append(farenCelsius(domMin));

	})
});