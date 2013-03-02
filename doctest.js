#!/usr/bin/env node

(function(esprima) {

console.log(JSON.stringify(esprima.parse('var answer = 42'), null, 4));

}(require('esprima')));
