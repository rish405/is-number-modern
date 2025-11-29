<div align="center">

<img alt="is-number-modern" src="https://img.shields.io/badge/is--number--modern-v0.1.0-blue" />
<img alt="npm" src="https://img.shields.io/npm/v/is-number-modern.svg" />
<img alt="types" src="https://img.shields.io/badge/types-TypeScript-3178C6" />
<img alt="formats" src="https://img.shields.io/badge/ESM%20%2B%20CJS-supported-8A2BE2" />
<img alt="deps" src="https://img.shields.io/badge/deps-0-brightgreen" />
<img alt="tree-shaking" src="https://img.shields.io/badge/tree%20shaking-yes-success" />
<img alt="size" src="https://img.shields.io/badge/minified-<1KB-success" />

</div>

# is-number-modern

Tiny, zero-dependency function to check if a value is a number or a numeric string. ESM + CJS dual build, TypeScript types included.

## Install

```bash
npm install is-number-modern
```

## Usage

```ts
import { isNumberModern } from 'is-number-modern';

isNumberModern(42);          // true
isNumberModern(new Number(1)); // true
isNumberModern('42');        // true
isNumberModern('-3.14');     // true
isNumberModern(Infinity);    // true
isNumberModern(NaN);         // false
isNumberModern('');          // false
isNumberModern('  ');        // false
isNumberModern('foo');       // false
isNumberModern([]);          // false
```

CommonJS:

```js
const { isNumberModern } = require('is-number-modern');
```

## Behavior

- Accepts: number literals, `Number` objects, numeric strings (e.g. `"42"`), floats, negatives, `Infinity`.
- Rejects: `NaN`, symbols, arrays, objects, booleans, empty strings, whitespace-only strings, non-numeric strings.
- Returns `true` only if the value can be safely converted to a number; `NaN` and non-numeric inputs return `false`.

## API

```ts
export function isNumberModern(value: unknown): boolean;
```

## Tree-shaking

- Named exports and `"sideEffects": false` enable aggressive tree-shaking.

## Development

```bash
npm run build
npm test
npm run typecheck
```

