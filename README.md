# redux-persist-transform-include-defaults

When rehydrating, spread the reducer's defaults before restoring the object. Includes new properties without a migration.

## Usage

### With Helper

```js
import transformIncludeDefaults from 'redux-persist-transform-include-defaults'

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
