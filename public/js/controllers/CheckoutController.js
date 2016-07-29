( function() {
	angular.module( 'Checkout', [ 'ngRoute' ] )
		.controller( 'CheckoutController', CheckoutController )
	CheckoutController.$inject = [ '$scope', 'ShoppingCart' ];

	function CheckoutController( $scope ) {
		$scope.view = {};
		$scope.view.greeting = "Testing"
	}

} )()
