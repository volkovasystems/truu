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
              */var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var truu = require("./truu.support.js");
//: @end-client







//: @client:

describe("truu", function () {

	describe("`truu( false )`", function () {
		it("should be equal to true", function () {
			assert.equal(truu(false), true);
		});
	});

	describe("`truu( 'hello' )`", function () {
		it("should be equal to true", function () {
			assert.equal(truu("hello"), true);
		});
	});

	describe("`truu( { 'name': 'simple' } )`", function () {
		it("should be equal to true", function () {
			assert.equal(truu({ "name": "simple" }), true);
		});
	});

	describe("`truu( [ 1, 2, 3 ] )`", function () {
		it("should be equal to true", function () {
			assert.equal(truu([1, 2, 3]), true);
		});
	});

	describe("`truu( 0 )`", function () {
		it("should be equal to true", function () {
			assert.equal(truu(0), true);
		});
	});

	describe("`truu( Symbol.for( 'hello' ) )`", function () {
		it("should be equal to true", function () {
			assert.equal(truu((0, _for2.default)("hello")), true);
		});
	});

	describe("`truu( Error )`", function () {
		it("should be equal to true", function () {
			assert.equal(truu(Error), true);
		});
	});

	describe("`truu( function hello( ){ } )`", function () {
		it("should be equal to true", function () {
			assert.equal(truu(function hello() {}), true);
		});
	});

	describe("`truu( Infinity )`", function () {
		it("should be equal to true", function () {
			assert.equal(truu(Infinity), true);
		});
	});

	describe("`truu( ( ) => { } )`", function () {
		it("should be equal to true", function () {
			assert.equal(truu(function () {}), true);
		});
	});

	describe("`truu( ( entity ) => ( typeof entity == 'string' ) )`", function () {
		it("should be equal to true", function () {
			assert.equal(truu(function (entity) {return typeof entity == "string";}), true);
		});
	});

	describe("`truu with instance of class named 'ClassA'`", function () {
		it("should be equal to false", function () {var

			ClassA = function () {
				function ClassA() {(0, _classCallCheck3.default)(this, ClassA);}(0, _createClass3.default)(ClassA, [{ key: "method", value: function method()
					{return "hello";} }]);return ClassA;}();


			var testA = new ClassA();

			assert.equal(truu(testA), false);

		});
	});

	describe("`truu( NaN )`", function () {
		it("should be equal to false", function () {
			assert.equal(truu(NaN), false);
		});
	});

	describe("`truu( null )`", function () {
		it("should be equal to false", function () {
			assert.equal(truu(null), false);
		});
	});

	describe("`truu( undefined )`", function () {
		it("should be equal to false", function () {
			assert.equal(truu(undefined), false);
		});
	});

	describe("`truu( '' )`", function () {
		it("should be equal to false", function () {
			assert.equal(truu(""), false);
		});
	});

	describe("`truu( { } )`", function () {
		it("should be equal to false", function () {
			assert.equal(truu({}), false);
		});
	});

	describe("`truu( [ ] )`", function () {
		it("should be equal to false", function () {
			assert.equal(truu([]), false);
		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwidHJ1dSIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsIkVycm9yIiwiaGVsbG8iLCJJbmZpbml0eSIsImVudGl0eSIsIkNsYXNzQSIsInRlc3RBIiwiTmFOIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLG1CQUFULENBQWI7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87O0FBRXhCQSxVQUFVLGlCQUFWLEVBQTZCLFlBQU87QUFDbkNDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxLQUFNLEtBQU4sQ0FBZCxFQUE2QixJQUE3QjtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLG1CQUFWLEVBQStCLFlBQU87QUFDckNDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxLQUFNLE9BQU4sQ0FBZCxFQUErQixJQUEvQjtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLGdDQUFWLEVBQTRDLFlBQU87QUFDbERDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxLQUFNLEVBQUUsUUFBUSxRQUFWLEVBQU4sQ0FBZCxFQUE0QyxJQUE1QztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxLQUFNLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQU4sQ0FBZCxFQUFt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akNDLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0Q0osVUFBT0ssS0FBUCxDQUFjSCxLQUFNLEVBQU4sQ0FBZCxFQUEyQixLQUEzQjtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLGVBQVYsRUFBMkIsWUFBTztBQUNqQ0MsS0FBSSwwQkFBSixFQUFnQyxZQUFPO0FBQ3RDSixVQUFPSyxLQUFQLENBQWNILEtBQU0sRUFBTixDQUFkLEVBQTJCLEtBQTNCO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUEsQ0F2SEQ7O0FBeUhBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwidHJ1dVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwidHJ1dS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvdHJ1dS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwidHJ1dVwiOiBcInRydXVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IHRydXUgPSByZXF1aXJlKCBcIi4vdHJ1dS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwidHJ1dVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImB0cnV1KCBmYWxzZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRydXUoIGZhbHNlICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgdHJ1dSggJ2hlbGxvJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRydXUoIFwiaGVsbG9cIiApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHRydXUoIHsgJ25hbWUnOiAnc2ltcGxlJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHJ1dSggeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9ICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgdHJ1dSggWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0cnV1KCBbIDEsIDIsIDMgXSApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHRydXUoIDAgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0cnV1KCAwICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgdHJ1dSggU3ltYm9sLmZvciggJ2hlbGxvJyApIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHJ1dSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB0cnV1KCBFcnJvciApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRydXUoIEVycm9yICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgdHJ1dSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0cnV1KCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHRydXUoIEluZmluaXR5IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHJ1dSggSW5maW5pdHkgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB0cnV1KCAoICkgPT4geyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHJ1dSggKCApID0+IHsgfSApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHRydXUoICggZW50aXR5ICkgPT4gKCB0eXBlb2YgZW50aXR5ID09ICdzdHJpbmcnICkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0cnV1KCAoIGVudGl0eSApID0+ICggdHlwZW9mIGVudGl0eSA9PSBcInN0cmluZ1wiICkgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB0cnV1IHdpdGggaW5zdGFuY2Ugb2YgY2xhc3MgbmFtZWQgJ0NsYXNzQSdgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGNsYXNzIENsYXNzQXtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cblx0XHRcdFx0bWV0aG9kKCApeyByZXR1cm4gXCJoZWxsb1wiOyB9XG5cdFx0XHR9XG5cblx0XHRcdGxldCB0ZXN0QSA9IG5ldyBDbGFzc0EoICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHJ1dSggdGVzdEEgKSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB0cnV1KCBOYU4gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHJ1dSggTmFOICksIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHRydXUoIG51bGwgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHJ1dSggbnVsbCApLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB0cnV1KCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHJ1dSggdW5kZWZpbmVkICksIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHRydXUoICcnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRydXUoIFwiXCIgKSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgdHJ1dSggeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRydXUoIHsgfSApLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB0cnV1KCBbIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHJ1dSggWyBdICksIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
