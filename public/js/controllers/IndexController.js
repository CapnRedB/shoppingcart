( function() {
	angular.module( 'Index', [] )
		.controller( 'IndexController', IndexController )
	IndexController.$inject = [ '$scope' ];

	function IndexController( $scope ) {
		$scope.view = {};
		$scope.view.greeting = "Testing"
	}

} )()
