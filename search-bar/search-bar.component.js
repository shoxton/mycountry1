angular.
	module('searchBar',[]).
	component('searchBar', {
		templateUrl: 'search-bar/search-bar.template.html',
		controller: ['Fact', 'Order', 'Country', '$http', function SearchBarCtrl(Fact, Order, Country, $http) {
			var self = this;
			self.countries = Country.query();

			//Share query filter
			self.Alpha = Fact;

			//Get country data for search suggestions
			// var getCountries = {
			// 	url: 'https://restcountries.eu/rest/v2/all',
			// 	method: 'GET'
			// }
			// $http(getCountries).then(function(response){
			// 	self.countries = response.data;
			// })


			// Clears the search field
			self.clear = function() {

				self.Alpha.Field = '';
			};

			//Share orderBy values
			self.order = Order;

			//Change default orderBy values
			self.orderUpdate = function(orderValue) {
				self.order.update(orderValue);
			}

			console.log('search controller ' + self.order.orderValue);
			
		}]
	})
