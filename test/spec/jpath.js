var fs = require('fs');
var PEG = require('pegjs');

beforeEach(function() {
    var grammar = fs.readFileSync('./jpath.pegjs', 'utf8');
    var parser = PEG.buildParser( grammar );
    this.parser = function(jpath) {
        return function() {
            parser.parse(jpath);
        }
    }
});

describe('jpath', function() {
    var tests = {
        '.foo': true,
        '/.foo': true,
        '.*': true,
        '.foo.bar': true,
        '.foo[1]': true,
        '.foo[.bar]': true,
        '.foo[.bar.loo]': true,
        '.foo[!.bar]': true,
        '.foo[.bar != "k"]': true,
        '.foo[. == "k"]': true,
        '.foo[.bar == "k"]': true,
        '.foo[1].bar': true,
        '.c.d[.e == "3"].d[1]': true,
        '.foo[!.bar && !.loo]': true,
        '.foo[.bar < .loo < .koo]': false,
        '.foo[.bar == "k" || .loo != "m"]': true
    };

    for (var test in tests) {

        (function(title, pass) {
            it(title, function() {
                var result = this.parser(title);

                if (pass) {
                    result.should.not.throw();
                } else {
                    result.should.throw();
                }
            });
        })(test, tests[test])

    }

});
