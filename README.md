# redux-persist-transform-include-defaults

[![npm](https://img.shields.io/npm/v/redux-persist-transform-include-defaults.svg?maxAge=3600&style=flat-square)](https://www.npmjs.com/package/redux-persist-transform-include-defaults)

When rehydrating, spread the reducer's defaults before restoring the object.

 - Includes new properties without a migration.

## Quickstart

### With Helper

```js
import { persistReducerIncludeDefaults } from 'redux-persist-transform-include-defaults';

const reducer = persistReducerIncludeDefaults(
  {
    // persist config
  },
  baseReducer
)
```

### Manually

```js
import { persistReducer } from 'redux-persist'
import transformIncludeDefaults from 'redux-persist-transform-include-defaults'

const reducer = persistReducer(
  {
    // persist config
    transforms: [
      transformIncludeDefaults(baseReducer),
    ]
  },
  baseReducer
)
```
