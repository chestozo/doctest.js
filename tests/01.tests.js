var expect = require('expect.js');

/**
    01. Let's start with the syntax.
    Here will be examples of syntax, that we want to support at first.
 */

// 1. Function declarations.

/**
    @test:
        1, 2 => 3
        undefined, 1 => NaN
 */
var sum = function(a, b) {
    return a + b;
};
// One @test is equal to one describe() call.
describe('sum', function() {
    // Every test line in @test is transformed into one it() call.
    it('1, 2 => 3', function() {
        expect(sum(1,2)).to.be.equal(3);
    });
    it('undefined, 1 => NaN', function() {
        expect( isNaN( sum(undefined, 1) ) ).to.be.ok(); // NOTE: for NaN we'll have to write some extra code.
    });
});



// 2. Class declarations.
var Summer = function(base) {
    this.base = base || 0;
};

/**
    @test:
        this:{ base: 1 } 3 => this:{ base: 4 }
        { base: 1 }: 3 => { base: 4 }: undefined // or without this
 */
Summer.prototype.add = function(num) {
    this.base += num;
};


// Future.
// a. Inside the function.
var trim = function(str) {
    var rx = /^\s*([^\s]*)\s*$/gi;
    var r = str.replace(rx, '\1');
    // @test: str=' a'  => r='a' // set variable value on this function line
    // @test: str='a '  => r='a'
    // @test: str=' a ' => r='a'
    // или
    // @test: ' a ' => r='a'     // on the left we have function parameters syntax, on the right — variable value
    return r;
};
