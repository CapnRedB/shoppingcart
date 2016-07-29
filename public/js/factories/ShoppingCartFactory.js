( function() {
	angular
		.module( 'ShoppingCartFactory', [] )
		.factory( 'ShoppingCart', ShoppingCart )

	ShoppingCart.$inject = [];

	function ShoppingCart() {
		var itemsInCart = [];
		var totalItemsInCart = 0;
		var itemNamesInCart = [];
		var ShoppingCart = {
			itemsInCart: itemsInCart,
			totalItemsInCart: totalItemsInCart,
			itemNamesInCart: itemNamesInCart,
			addItemsToCart: addItemsToCart
		};

		function addItemsToCart( itemToAdd, qty ) {
			console.log( "I'm helping" );
			qty = parseInt( qty );
			//console.log( qty );
			totalItemsInCart += qty;
			if ( itemNamesInCart.includes( itemToAdd.name ) ) {
				itemsInCart[ itemNamesInCart.indexOf( itemToAdd.name ) ].qty += qty;
			} else {
				itemToAdd.qty = qty;
				itemsInCart.push( itemToAdd );
				itemNamesInCart.push( itemToAdd.name );
			}
			console.log( itemsInCart );
			console.log( totalItemsInCart );
			//console.log( itemNamesInCart );

		}

		function checkNumItems() {
			return totalItemsInCart;
		}

		return ShoppingCart;
	}

} )();
