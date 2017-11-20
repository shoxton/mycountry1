angular.
	module('countryDetail').
	component('countryDetail', {
		templateUrl: 'country-detail/country-detail.template.html',
		controller: ['$routeParams', '$http', 'Country', 'News', 'Map','Images', 
			function CountryDetailCtrl($routeParams, $http, Country, News, Map, Images) {



				var self = this;

				var iconLoader = document.querySelector('.icon-loader');

				self.country = Country.get({endPoint: 'alpha', countryId: $routeParams.countryId}, function(country) {

					
					// News Service
					News.get({countryName: country.name}, function(news) {
						var newsArray;
						self.newsArray = news.response.results.slice(0,3);
					});

					// Images Request
					var imagesUns = {
						url: 'https://api.unsplash.com/search/photos?page=1&query=' + country.name + '',
						method: 'GET',
						headers: {Authorization: 'Bearer 4c794b61271c7562e66bccc656322d048babf29b103963864b28b27307abe172'}

					}
					$http(imagesUns).then(function(response) {
						var imageData;
						self.imageData = response.data.results.slice(0,3);
						iconLoader.style.display = 'none';
					})

					// Map Service
					Map(country.latlng, 5);
					
				});

				// angular.forEach(self.country, function(value, key) {
				// 	if (value == null) {
				// 		value = 'No data available';
				// 	}
				// })


	








		}]
	})