import baseConfig from './base.mjs'
import tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import globals from 'globals'

export { baseConfig as base, globals }

const vue = {
	languageOptions: {
		// vue parser will be added by the vuePlugin config (see below)
		parserOptions: {
			parser: tsParser,
			extraFileExtensions: ['.vue'],
		},
	},
	rules: {
		'vue/multi-word-component-names': 'off',
		'no-restricted-imports': [
			'warn',
			{
				patterns: [
					{
						group: [
							'@vue/reactivity',
							'@vue/runtime-*',
							'@vue/shared',
						],
						message: 'Import from main package "vue" instead',
					},
				],
			},
		],
	},
}

export const vueConfig = [
	...baseConfig,
	...vuePlugin.configs['flat/essential'],
	vue,
]

export const browserGlobalsConfig = {
	languageOptions: {
		globals: {
			...globals.browser,
		},
	},
}
export const nodeGlobalsConfig = {
	languageOptions: {
		globals: {
			...globals.node,
		},
	},
}
export const sharedSSRGlobalsConfig = {
	languageOptions: {
		globals: {
			...globals.browser,
			...globals.node,
		},
	},
}
