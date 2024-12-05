// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import jestPlugin from 'eslint-plugin-jest';

const compat = new FlatCompat({
	baseDirectory: new URL('.', import.meta.url).pathname, // Correct base directory for ES modules
});

export default [
	// Base configurations
	js.configs.recommended,
	// Integrating Prettier and Jest plugins
	...compat.extends(
		'plugin:prettier/recommended', // Correctly integrating Prettier
		'plugin:jest/recommended'
	),
	{
		plugins: {
			jest: jestPlugin,
		},
		rules: {
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto',
					useTabs: true,
					tabWidth: 4,
				},
			],
		},
	},
	{
		files: ['**/*.test.js'],
		plugins: {
			jest: jestPlugin,
		},
		rules: {
			...jestPlugin.configs.recommended.rules,
		},
	},
];
