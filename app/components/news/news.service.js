angular.
	module('country').
	factory('News', ['$resource', 
		function($resource) {
			return $resource('https://content.guardianapis.com/search?q=:countryName&from-date=2-01-01&show-fields=thumbnail&api-key=bfab3a0e-227f-4188-8bed-9b544b65025e', {}, {
				query: {
					method: 'GET',
					params: {
						countryName: ''
					},
					isArray: true
				}
			});
		}
	]);