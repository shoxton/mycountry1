angular.
	module('searchBar',[]).
	component('searchBar', {
		templateUrl: 'search-bar/search-bar.template.html',
		controller: ['Fact', 'Order', 'Country', '$http','$route', '$location', function SearchBarCtrl(Fact, Order, Country, $http, $route, $location) {
			var self = this;
			self.countries = Country.query();

			//Share query filter
			self.Alpha = Fact;

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
			
			self.changeBar = function () {
				if ($location.path() != '/countries') {
					$('.search-bar').css({'z-index':'9999', 'position':'fixed','width':'100%','box-shadow':'0 6px 15px rgba(0,0,0,.4)'})
					$('.searchground').css('height','120px');
					$('.searchground .content').css({'display':'flex', 'align-items':'baseline', 'width':'100%'});
					$('.searchground .content h2').css('display','none');
					$('.searchground .content p').css('display','none');
					$('.searchground .content .query-area').css({'width':'100%', 'margin':'0 40px'});
					$('.filters-container').css('margin-left','0');
				} else {
					$('.back-btn').css('display','none');
				}
				
			};

			self.changeBar();
			
		}]
	})
