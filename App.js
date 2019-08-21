import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { InAppNotificationProvider } from 'react-native-in-app-notification';

import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reducer from './src/reducers';

const persistConfig = {
  key: 'root1',
  storage,
  whitelist: ['history', 'profile'],
  blacklist: ['post']
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

//persistor.purge();
//persistor.persist();

console.disableYellowBox = true;

import Router from './src/screens/Router';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <InAppNotificationProvider>
            <Router />
          </InAppNotificationProvider>
        </PersistGate>
      </Provider>
    );
  }
}
