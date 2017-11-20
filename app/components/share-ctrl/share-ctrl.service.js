angular.
	module('shareCtrl').
	factory('Fact', function() {
		return { 
			Field: ''
		 };
	});


angular.
	module('shareCtrl').
	factory('Order', function(){
		var order = {};

		order.orderValue = 'name';

		order.update = function(orderValue) {
			order.orderValue = orderValue;
		};

		return order;

	});
