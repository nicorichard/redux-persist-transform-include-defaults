import { isPlainObject } from 'lodash';
import { persistReducer, createTransform } from 'redux-persist';

export const ACTION_TYPE = 'redux-persist-transform-include-defaults/TRANSFORM';

export const persistReducerDefaultsFirst = (config, reducer) =>
  persistReducer(
    {
      ...config,
      transforms: [
        ...(config.transforms || []),
        rehydrateDefaultsFirst(reducer),
      ],
    },
    reducer,
  );

const rehydrateDefaultsFirst = (reducers) =>
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

export default rehydrateDefaultsFirst;
