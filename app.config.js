angular.module('myApp').
	config(['$routeProvider', 
		function config($routeProvider) {

			$routeProvider.
				when('/countries', {
					template: 
						'<search-bar></search-bar>'+
						'<country-list></country-list>'
				}).
				when('/countries/:countryId', {
					template:
						'<search-bar></search-bar>'+
						'<country-detail></country-detail>'
				}).
				otherwise('/countries', {
					template: 
						'<search-bar></search-bar>'+
						'<country-list></country-list>'
				});


		}])