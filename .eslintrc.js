// @ts-check

const config = require('.');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	...config,
	env: {
		es2021: true,
		node: true,
	},
};
