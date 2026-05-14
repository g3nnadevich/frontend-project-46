install:
	npm ci

publish:
	npm publish --dry-run

run-json:
	node bin/gendiff __fixtures__/file_1.json __fixtures__/file_2.json
run-yaml:
	node bin/gendiff __fixtures__/file_1.yaml __fixtures__/file_2.yaml
run-yml:
	node bin/gendiff __fixtures__/file_1.yml __fixtures__/file_2.yml

test:
	npm test

test-coverage:
	npx jest --coverage

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix