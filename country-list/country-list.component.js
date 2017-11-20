
angular.
	module('countryList').
	component('countryList', {
		templateUrl: 'country-list/country-list.template.html',
		controller: ['Country', 'Fact', 'Order', '$http', function CountryListCtrl(Country, Fact, Order, $http) {
			
			var self = this;
			// Get country data
			var iconLoader = document.querySelector('.icon-loader');

			self.countries = Country.query(function(){
				iconLoader.style.display = 'none';
			});

			// Share query filter
			self.Beta = Fact;

			// Clear search bar 
			self.clear = function() {

				self.Beta.Field = '';
			};

			
			self.order = Order;


			console.log('list controller ' + self.order.orderValue);
		}]
	});