var app = angular.module( 'shoppingCart', [ 'ngRoute', 'ngAnimate', 'Index', 'Catalog' ] )
app.config( function( $routeProvider, $locationProvider, $httpProvider ) {
	$routeProvider
		.when( '/', {
			templateUrl: '/views/templates/home.html',
			controller: 'IndexController',
			controllerAs: 'index'
		} )
		.when( '/catalog', {
			templateUrl: '/views/templates/catalog.html',
			controller: 'CatalogController',
			controllerAs: 'catalog'
		} )
	$locationProvider.html5Mode( {
		enabled: true,
		requireBase: false
	} )
} )
