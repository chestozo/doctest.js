#!/usr/bin/env node

var test_mark = '@test:';
var re_test = /@test:/;

var fs = require('fs');
var esprima = require('esprima');
var mocha = require('mocha');

var file = process.argv[2];

// Get tests from comments.
var parseTests = function(parsed) {
    var groups = parsed.comments.filter(function(comment) {
        return comment.type === 'Block' && comment.value.match(re_test);
    });

    for (var g = groups.length - 1; g > -1; g--) {
        // Get tests.
        var tests = groups[g].value.trim().split('\n').map(function(str) { return str.trim(); });
        tests = tests.slice(tests.indexOf(test_mark) + 1);

        // Find the function.

        // !!! http://esprima.org/demo/parse.html

        // Generate tests.

        console.log(tests);
    }

    return [];
};

// Generate a new file.
var generateTestFile = function(tests) {
    // go from bottom to top and append tests
};

// Run it with mocha.
var runTests = function() {
    // console.dir(mocha);
};

// ----------------------------------------------------------------------------------------------------------------- //

// Read file and run tests if present.
fs.readFile(file, function(err, data) {
    if (err) {
        throw err;
    }

    var parsed = esprima.parse(data, { comment: true, loc: true });
    console.log(JSON.stringify(parsed, null, 2));

    runTests(
        generateTestFile(
            parseTests(parsed)
        )
    );
});
