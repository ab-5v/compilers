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

    it('.foo', function() {
        this.parser('.foo').should.not.throw();
    });

    it('/.foo', function() {
        this.parser('/.foo').should.not.throw();
    });

    it('.*', function() {
        this.parser('.*').should.not.throw();
    });

    it('.foo.bar', function() {
        this.parser('.foo.bar').should.not.throw();
    });

    it('.foo[1]', function() {
        this.parser('.foo[1]').should.not.throw();
    });

    it('.foo[.bar]', function() {
        this.parser('.foo[.bar]').should.not.throw();
    });

    it('.foo[.bar.loo]', function() {
        this.parser('.foo[.bar.loo]').should.not.throw();
    });

    it('.foo[!.bar]', function() {
        this.parser('.foo[!.bar]').should.not.throw();
    });

    it('.foo[.bar != "k"]', function() {
        this.parser('.foo[.bar != "k"]').should.not.throw();
    });

    it('.foo[. == "k"]', function() {
        this.parser('.foo[. == "k"]').should.not.throw();
    });

    it('.foo[.bar == "k"]', function() {
        this.parser('.foo[.bar == "k"]').should.not.throw();
    });

    it('.foo[1].bar', function() {
        this.parser('.foo[1].bar').should.not.throw();
    });

    it('.c.d[.e == "3"].d[1]', function() {
        this.parser('.c.d[.e == "3"].d[1]').should.not.throw();
    });

    it('.foo[!.bar && !.loo]', function() {
        this.parser('.foo[!.bar && !.loo]').should.not.throw();
    });

    it('.foo[.bar == "k" || .loo != "m"]', function() {
        this.parser('.foo[.bar == "k" || .loo != "mmm"]').should.not.throw();
    });

});

