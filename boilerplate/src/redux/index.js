import { combineReducers } from 'redux';

import configureStore from './createStore';
import rootSaga from './sagas';

import { reducer as StartupReducer } from 'models/startup';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  startup: StartupReducer
});

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers;

      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require('./sagas').default;

      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
};
