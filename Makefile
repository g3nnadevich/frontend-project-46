install:
	npm ci

publish:
	npm publish --dry-run

run:
	node bin/gendiff __fixtures__/file_1.json __fixtures__/file_2.json

test:
	npm test

test-coverage:
	npx jest --coverage

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix