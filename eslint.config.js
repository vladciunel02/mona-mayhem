import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
	// Astro files
	...eslintPluginAstro.configs.recommended,
	
	// TypeScript and JavaScript files
	{
		files: ['**/*.ts', '**/*.js', '**/*.mjs'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
		},
		rules: {
			// Unused variables - error on unused vars
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			
			// Code style improvements
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{ prefer: 'type-imports' },
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'prefer-const': 'error',
			'no-var': 'error',
			'eqeqeq': ['error', 'always'],
			'curly': ['error', 'all'],
			'quotes': ['error', 'single', { avoidEscape: true }],
			'semi': ['error', 'always'],
		},
	},
	
	// Ignore patterns
	{
		ignores: [
			'dist/',
			'node_modules/',
			'.astro/',
			'**/*.d.ts',
		],
	},
];
