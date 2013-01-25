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
    // @test: str=' a'  => r='a' // задаём значение переменной в данном месте функции
    // @test: str='a '  => r='a'
    // @test: str=' a ' => r='a'
    // или
    // @test: ' a ' => r='a'     // задаём параметры для функции
    return r;
};
