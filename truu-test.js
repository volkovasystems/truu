"use strict";

const truu = require( "./truu.js" );

console.log( truu( { "name": "simple" } ) );
console.log( truu( [ 1, 2, 3 ] ) );
console.log( truu( { } ) );
console.log( truu( [ ] ) );
