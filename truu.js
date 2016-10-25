"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
	@end-module-license

	@module-configuration:
		{
			"package": "truu",
			"path": "truu/truu.js",
			"file": "truu.js",
			"module": "truu",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/truu.git",
			"test": "truu-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Check if entity is falsy or empty.
	@end-module-documentation

	@include:
		{
			"doubt": "doubt",
			"filled": "filled",
			"stuffed": "stuffed",
			"truly": "truly"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var doubt = require( "doubt" );
	var filled = require( "filled" );
	var stuffed = require( "stuffed" );
	var truly = require( "truly" );
}

if( typeof window != "undefined" &&
	!( "doubt" in window ) )
{
	throw new Error( "doubt is not defined" );
}

if( typeof window != "undefined" &&
	!( "filled" in window ) )
{
	throw new Error( "filled is not defined" );
}

if( typeof window != "undefined" &&
	!( "stuffed" in window ) )
{
	throw new Error( "stuffed is not defined" );
}

if( typeof window != "undefined" &&
	!( "truly" in window ) )
{
	throw new Error( "truly is not defined" );
}

var truu = function truu( entity ){
	/*;
		@meta-configuration:
			{
				"entity:required": "*"
			}
		@end-meta-configuration
	*/

	if( doubt( entity ).AS_ARRAY ){
		return filled( entity );
	}

	if( typeof entity == "object" ){
		return stuffed( entity );
	}

	return truly( entity );
};

if( typeof module != "undefined" ){
	module.exports = truu;
}
