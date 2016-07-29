var app = angular.module( 'shoppingApp', [ 'ngRoute', 'ngAnimate', 'Index', 'Catalog', 'ShoppingCartFactory' ] )
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
		.when( '/checkout', {
			templateUrl: '/views/templates/checkout.html',
			controllerAs: 'checkout'
		} )
	$locationProvider.html5Mode( {
		enabled: true,
		requireBase: false
	} )
} )
