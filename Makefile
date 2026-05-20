install:
	npm ci

publish:
	npm publish --dry-run

demonstration-json-stylish:
	node bin/gendiff __fixtures__/file_1.json __fixtures__/file_2.json
demonstration-json-plain:
	node bin/gendiff -f plain __fixtures__/file_1.json __fixtures__/file_2.json 

demonstration-yaml-stylish:
	node bin/gendiff __fixtures__/file_1.yaml __fixtures__/file_2.yaml
demonstration-yaml-plain:
	node bin/gendiff -f plain __fixtures__/file_1.yaml __fixtures__/file_2.yaml 

demonstration-yml-stylish:
	node bin/gendiff __fixtures__/file_1.yaml __fixtures__/file_2.yaml
demonstration-yml-plain:
	node bin/gendiff -f plain __fixtures__/file_1.yml __fixtures__/file_2.yml 

test:
	npm test

test-coverage:
	npx jest --coverage

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix