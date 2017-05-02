"use strict";

const assert = require( "assert" );
const truu = require( "./truu.js" );

assert.equal( truu( { "name": "simple" } ), true, "should be true" );
assert.equal( truu( [ 1, 2, 3 ] ), true, "should be true" );
assert.equal( truu( [ { } ] ), true, "should be true" );
assert.equal( truu( { } ), false, "should be false" );
assert.equal( truu( [ ] ), false, "should be false" );

console.log( "ok" );
