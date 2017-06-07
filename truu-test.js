
const assert = require( "assert" );
const truu = require( "./truu.js" );

assert.equal( truu( false ), true, "should be true" );
assert.equal( truu( "hello" ), true, "should be true" );
assert.equal( truu( { "name": "simple" } ), true, "should be true" );
assert.equal( truu( [ 1, 2, 3 ] ), true, "should be true" );
assert.equal( truu( [ { } ] ), true, "should be true" );
assert.equal( truu( function hello( ){ } ), true, "should be true" );
assert.equal( truu( Infinity ), true, "should be true" );
assert.equal( truu( Array ), true, "should be true" );
assert.equal( truu( Object ), true, "should be true" );
assert.equal( truu( Date ), true, "should be true" );

assert.equal( truu( NaN ), false, "should be false" );
assert.equal( truu( null ), false, "should be false" );
assert.equal( truu( undefined ), false, "should be false" );
assert.equal( truu( "" ), false, "should be false" );
assert.equal( truu( { } ), false, "should be false" );
assert.equal( truu( [ ] ), false, "should be false" );

console.log( "ok" );
