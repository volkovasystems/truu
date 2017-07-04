
const assert = require( "assert" );
const truu = require( "./truu.js" );

assert.equal( truu( false ), true, "should be true" );

assert.equal( truu( "hello" ), true, "should be true" );

assert.equal( truu( { "name": "simple" } ), true, "should be true" );

assert.equal( truu( [ 1, 2, 3 ] ), true, "should be true" );

assert.equal( truu( 0 ), true, "should return true" );

assert.equal( truu( Symbol.for( "hello" ) ), true, "should return true" );

assert.equal( truu( Error ), true, "should return true" );

assert.equal( truu( function hello( ){ } ), true, "should be true" );

assert.equal( truu( Infinity ), true, "should be true" );

assert.equal( truu( Array ), true, "should be true" );

assert.equal( truu( ( ) => { } ), true, "should return true" );

assert.equal( truu( ( ( ) => arguments )( ) ), true, "should return true" );

assert.equal( truu( ( entity ) => ( typeof entity == "string" ) ), true, "should return true" );

class ClassA{
	constructor( ){ }
	method( ){ return "hello"; }
}

let testA = new ClassA( );

assert.equal( truu( testA ), false, "should return false" );

assert.equal( truu( NaN ), false, "should be false" );

assert.equal( truu( null ), false, "should be false" );

assert.equal( truu( undefined ), false, "should be false" );

assert.equal( truu( "" ), false, "should be false" );

assert.equal( truu( { } ), false, "should be false" );

assert.equal( truu( [ ] ), false, "should be false" );

console.log( "ok" );
