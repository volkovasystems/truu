"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "truu",
			"path": "truu/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/truu.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"truu": "truu"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const truu = require( "./truu.js" );
//: @end-server

//: @client:
const truu = require( "./truu.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "truu", ( ) => {

	describe( "`truu( false )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( false ), true );
		} );
	} );

	describe( "`truu( 'hello' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( "hello" ), true );
		} );
	} );

	describe( "`truu( { 'name': 'simple' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( { "name": "simple" } ), true );
		} );
	} );

	describe( "`truu( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( [ 1, 2, 3 ] ), true );
		} );
	} );

	describe( "`truu( 0 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( 0 ), true );
		} );
	} );

	describe( "`truu( Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( Symbol.for( "hello" ) ), true );
		} );
	} );

	describe( "`truu( Error )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( Error ), true );
		} );
	} );

	describe( "`truu( function hello( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( function hello( ){ } ), true );
		} );
	} );

	describe( "`truu( Infinity )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( Infinity ), true );
		} );
	} );

	describe( "`truu( ( ) => { } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( ( ) => { } ), true );
		} );
	} );

	describe( "`truu( ( entity ) => ( typeof entity == 'string' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( ( entity ) => ( typeof entity == "string" ) ), true );
		} );
	} );

	describe( "`truu with instance of class named 'ClassA'`", ( ) => {
		it( "should be equal to false", ( ) => {

			class ClassA{
				constructor( ){ }
				method( ){ return "hello"; }
			}

			let testA = new ClassA( );

			assert.equal( truu( testA ), false );

		} );
	} );

	describe( "`truu( NaN )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( truu( NaN ), false );
		} );
	} );

	describe( "`truu( null )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( truu( null ), false );
		} );
	} );

	describe( "`truu( undefined )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( truu( undefined ), false );
		} );
	} );

	describe( "`truu( '' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( truu( "" ), false );
		} );
	} );

	describe( "`truu( { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( truu( { } ), false );
		} );
	} );

	describe( "`truu( [ ] )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( truu( [ ] ), false );
		} );
	} );

} );

//: @end-server


//: @client:

describe( "truu", ( ) => {

	describe( "`truu( false )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( false ), true );
		} );
	} );

	describe( "`truu( 'hello' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( "hello" ), true );
		} );
	} );

	describe( "`truu( { 'name': 'simple' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( { "name": "simple" } ), true );
		} );
	} );

	describe( "`truu( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( [ 1, 2, 3 ] ), true );
		} );
	} );

	describe( "`truu( 0 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( 0 ), true );
		} );
	} );

	describe( "`truu( Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( Symbol.for( "hello" ) ), true );
		} );
	} );

	describe( "`truu( Error )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( Error ), true );
		} );
	} );

	describe( "`truu( function hello( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( function hello( ){ } ), true );
		} );
	} );

	describe( "`truu( Infinity )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( Infinity ), true );
		} );
	} );

	describe( "`truu( ( ) => { } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( ( ) => { } ), true );
		} );
	} );

	describe( "`truu( ( entity ) => ( typeof entity == 'string' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( truu( ( entity ) => ( typeof entity == "string" ) ), true );
		} );
	} );

	describe( "`truu with instance of class named 'ClassA'`", ( ) => {
		it( "should be equal to false", ( ) => {

			class ClassA{
				constructor( ){ }
				method( ){ return "hello"; }
			}

			let testA = new ClassA( );

			assert.equal( truu( testA ), false );

		} );
	} );

	describe( "`truu( NaN )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( truu( NaN ), false );
		} );
	} );

	describe( "`truu( null )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( truu( null ), false );
		} );
	} );

	describe( "`truu( undefined )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( truu( undefined ), false );
		} );
	} );

	describe( "`truu( '' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( truu( "" ), false );
		} );
	} );

	describe( "`truu( { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( truu( { } ), false );
		} );
	} );

	describe( "`truu( [ ] )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( truu( [ ] ), false );
		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "truu", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`truu( false )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( false );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`truu( 'hello' )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( "hello" );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`truu( { 'name': 'simple' } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( { "name": "simple" } );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`truu( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( [ 1, 2, 3 ] );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`truu( 0 )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( 0 );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`truu( Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( Symbol.for( "hello" ) );
				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

	describe( "`truu( Error )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( Error );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`truu( function hello( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( function hello( ){ } );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`truu( Infinity )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( Infinity );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`truu( ( ) => { } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( ( ) => { } );
				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

	describe( "`truu( ( entity ) => ( typeof entity == 'string' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( ( entity ) => ( typeof entity == "string" ) );
				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

	describe( "`truu with instance of class named 'ClassA'`", ( ) => {
		it( "should be equal to false", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					class ClassA{
						constructor( ){ }
						method( ){ return "hello"; }
					}

					let testA = new ClassA( );

					return truu( testA );
				}

			).value;
			//: @end-ignore
			assert.equal( result, false );

		} );
	} );

	describe( "`truu( NaN )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( NaN );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`truu( null )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( null );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`truu( undefined )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( undefined );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`truu( '' )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( "" );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`truu( { } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( { } );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`truu( [ ] )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truu( [ ] );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

} );

//: @end-bridge
