import { isPlainObject } from 'lodash';
import { persistReducer, createTransform } from 'redux-persist';

export const ACTION_TYPE = 'redux-persist-transform-include-defaults/TRANSFORM';

export const persistReducerIncludeDefaults = (config, reducer) =>
  persistReducer(
    {
      ...config,
      transforms: [
        ...(config.transforms || []),
        transformIncludeDefaults(reducer),
      ],
    },
    reducer,
  );

const transformIncludeDefaults = (reducers) =>
  createTransform(
    (inboundState) => inboundState,
    (outboundState, key) => {
      const defaults = reducers(undefined, {
        type: ACTION_TYPE,
      })[key];

      if (isPlainObject(defaults)) {
        return {
          ...defaults,
          ...outboundState,
        };
      }
      return outboundState;
    },
  );

export default transformIncludeDefaults;
