angular.
	module('map').
	factory('Map', function() {
		return function(latlng, zoom) {
			if(typeof latlng[0] && typeof latlng[1] == 'number') {
				var location = L.map('map').setView(latlng, zoom);
				L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
				    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
				    maxZoom: 18,
				    id: 'mapbox.streets',
				    accessToken: 'pk.eyJ1Ijoia2FpdGVuaW5nIiwiYSI6ImNqOW9oMmt5YzVkZjMzMm1xdWI1aGNpaTgifQ.CiONiamfwDI3uUSMnpfbEw'
				}).addTo(location);
			} else {
				document.getElementById('map-card').style.display = 'none';
			}

		};
	})



