install:
	npm install

brain-games:
	node bin/brain-games.js

lint:
	npx eslint .

publish:
	npm publish --dry-run