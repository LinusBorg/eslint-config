import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier/flat'

import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import unusedImports from 'eslint-plugin-unused-imports'
import noAutofix from 'eslint-plugin-no-autofix'

export default tsEslint.config(
	eslint.configs.recommended,
	tsEslint.configs.eslintRecommended,
	prettier,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			parser: tsParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			sourceType: 'module',
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			'no-autofix': noAutofix,
			'unused-imports': unusedImports,
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-autofix/unused-imports/no-unused-imports': 'warn',
			'no-autofix/unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
	}
)
