// @flow

import { compose, createStore } from 'redux';
import rootReducer from './rootReducer'

const composeEnhancers = (typeof window === 'object') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : undefined

// preloadedState will be passed in by the plugin
const store = preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers ? composeEnhancers() : compose()
  );
};

export default store
