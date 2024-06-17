import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	// https://eslint.org/blog/2022/08/new-config-system-part-2/
	// migration guide
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
	// {
	// 	rules: {
	// 		// 'no-unused-vars': 'error',
	// 		'@typescript-eslint/no-unused-vars': 'warn',
	// 		'@typescript-eslint/no-use-before-define': 'warn'
	// 	}
	// }
];
