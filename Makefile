install:
	npm ci

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npx jest --coverage

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

demonstrate-json:
	node bin/gendiff __fixtures__/file_1.json __fixtures__/file_2.json
	node bin/gendiff -f plain __fixtures__/file_1.json __fixtures__/file_2.json 
	node bin/gendiff -f json __fixtures__/file_1.json __fixtures__/file_2.json 

demonstrate-yaml:
	node bin/gendiff __fixtures__/file_1.yaml __fixtures__/file_2.yaml
	node bin/gendiff -f plain __fixtures__/file_1.yaml __fixtures__/file_2.yaml 
	node bin/gendiff -f json __fixtures__/file_1.yaml __fixtures__/file_2.yaml 

demonstrate-yml:
	node bin/gendiff __fixtures__/file_1.yaml __fixtures__/file_2.yaml
	node bin/gendiff -f plain __fixtures__/file_1.yml __fixtures__/file_2.yml
	node bin/gendiff -f json __fixtures__/file_1.yml __fixtures__/file_2.yml 