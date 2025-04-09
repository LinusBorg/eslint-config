# `@linusborg/eslint-config`

Personal presets used in my projects.

Included:

- @typescript-eslint
- compatible with prettier
- eslint-plugin-unused-imports
- Vue support (default)
- modular approach to adjust for different environments

## Usage

### Common Usage example

Vue application with TypeScript. Also enables different globals for config files (ran in node) vs. app src code (ran in browser).

```js
// eslint.config.js
import {
	vueConfig,
	browserGlobalsConfig,
	nodeGlobalsConfig,
} from '@linusborg/eslint-config'

export default [
	...vueConfig,
	{
		// for config files
		files: ['*.ts', '*.js'],
		...nodeGlobalsConfig,
	},
	{
		// for browser code
		files: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.vue'],
		...browserGlobalsConfig,
	},
]
```

## Exports

### `vueConfig`

Use this if you're building a Vue based application, plugin or library that will involve SFCs.

### `baseConfig`

Use this if you are building a library or application that does not involve Vue SFCs.

## `nodeGlobalsConfig`

This adds node globals, so should be used with a file filter for config files.

```js
{
	files: ['*.ts', '*.js'],
	...nodeGlobalsConfig,
}
```

### `browserGlobalsConfig`

This should be combined with the vue or base config for the actual source files when your app/library will run in the browser.

```js
{
	files: ['src/**/**ts', 'src/**/*.js', 'src/**/*.vue'],
	...browserGlobalsConfig,
}
```

### `sharedSSRGlobalsConfig`

This should be combined with the vue or base config for the actual source files when your app/library will run in the browser AND the server.

```js
{
	files: ['src/**/**ts', 'src/**/*.js', 'src/**/*.vue'],
	...sharedSSRGlobalsConfig,
}
```

### `globals`

Re-export of the `globals` package, in case you need it for more custom configs.

see https://www.npmjs.com/package/globals
