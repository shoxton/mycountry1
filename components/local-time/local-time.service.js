angular.module('localTime').
	factory('LocalTime', ['$resource', 
		function($resource) {
			return $resource('https://maps.googleapis.com/maps/api/timezone/json?location=:latLng&timestamp=:countryTime&key=AIzaSyCzahEqxpP-r3YrYH30nLDKeSPVf2kh79U', {}, {
				query: {
					method: 'GET',
					params: {
						latLng: '',
						countryTime: ''
					}
				}
			})
		}])


