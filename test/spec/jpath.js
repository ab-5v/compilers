var fs = require('fs');
var PEG = require('pegjs');
var expect = require('expect.js');

beforeEach(function() {
    var grammar = fs.readFileSync('./jpath.pegjs', 'utf8');
    this.parser = PEG.buildParser( grammar );
});

describe('jpath', function() {

    it('.foo', function() {
        expect(this.parser.parse('.foo')).to.be.ok();
    });

    it('/.foo', function() {
        expect(this.parser.parse('/.foo')).to.be.ok();
    });

    it('.*', function() {
        expect(this.parser.parse('.*')).to.be.ok();
    });

    it('.foo.bar', function() {
        expect(this.parser.parse('.foo.bar')).to.be.ok();
    });

    it('.foo[1]', function() {
        expect(this.parser.parse('.foo[1]')).to.be.ok();
    });

    it('.foo[.bar]', function() {
        expect(this.parser.parse('.foo[.bar]')).to.be.ok();
    });

    it('.foo[.bar.loo]', function() {
        expect(this.parser.parse('.foo[.bar.loo]')).to.be.ok();
    });

    it('.foo[!.bar]', function() {
        expect(this.parser.parse('.foo[!.bar]')).to.be.ok();
    });

    it('.foo[.bar != "k"]', function() {
        expect(this.parser.parse('.foo[.bar != "k"]')).to.be.ok();
    });

    it('.foo[. == "k"]', function() {
        expect(this.parser.parse('.foo[. == "k"]')).to.be.ok();
    });

    it('.foo[.bar == "k"]', function() {
        expect(this.parser.parse('.foo[.bar == "k"]')).to.be.ok();
    });

    it('.foo[1].bar', function() {
        expect(this.parser.parse('.foo[1].bar')).to.be.ok();
    });

    it('.c.d[.e == "3"].d[1]', function() {
        expect(this.parser.parse('.c.d[.e == "3"].d[1]')).to.be.ok();
    });

    it('.foo[!.bar && !.loo]', function() {
        expect(this.parser.parse('.foo[!.bar && !.loo]')).to.be.ok();
    });

    it('.foo[.bar == "k" || .loo != "m"]', function() {
        expect(this.parser.parse('.foo[.bar == "k" || .loo != "mmm"]')).to.be.ok();
    });

});

