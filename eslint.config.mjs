import { vueConfig, browserGlobalsConfig, nodeGlobalsConfig } from './index.mjs'

export default [
	...vueConfig,
	{
		files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
		...nodeGlobalsConfig,
	},
	{
		files: ['/tests/**/*.js', '/tests/**/*.jsx', '/tests/**/*.vue'],
		...browserGlobalsConfig,
	},
	{
		ignores: ['dist/**', '.vscode/**', 'node_modules/**'],
	},
]
