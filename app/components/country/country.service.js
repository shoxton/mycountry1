angular.
	module('country').
	factory('Country', ['$resource', 
		function($resource) {
			return $resource('https://restcountries.eu/rest/v2/:endPoint/:countryId', {}, {
				query: {
					method: 'GET',
					params: {endPoint: 'all', countryId: ''},
					isArray: true
				}
			});
		}
	]);
