TESTS=test/spec/*.js

all: npm test

npm:
	npm install

test:
	./node_modules/mocha/bin/mocha --reporter dot --require should $(TESTS)

.PHONY: all test
