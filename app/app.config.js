angular.module('myApp').
	config(['$routeProvider', 
		function config($routeProvider) {

			$routeProvider.
				when('/countries', {
					template: '<country-list></country-list>'
				}).
				when('/countries/:countryId', {
					template:'<country-detail></country-detail>'
				}).
				otherwise('/countries', {
					template: '<country-list></country-list>'
				});


		}])