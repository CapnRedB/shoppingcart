var express = require( 'express' ),
	server = express(),
	body = require( 'body-parser' ),
	methodOverride = require( 'method-override' );

require( 'locus' );

server.use( body.json() )
	.use( body.urlencoded( {
		extended: false
	} ) )
	.use( methodOverride( '_method' ) )
	.use( express.static( 'public' ) );
server.post( '*', ( req, res ) => {
	res.sendFile( __dirname + '/public/views/index.html' );
} )

server.get( '*', ( req, res ) => {
	res.sendFile( __dirname + '/public/views/index.html' )
} );

server.listen( 3000, ( req, res ) => {
	console.log( 'server is listening on 3000' );
} )
