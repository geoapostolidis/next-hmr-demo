import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const version = 3 // change it to update initial state

export const migrations = {
  [version]: () => ({}),
};

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1,
  version,
  migrate: createMigrate(migrations, { debug: true })
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});

export const persistor = persistStore(store);

// persistor.purge(); // clear initial state