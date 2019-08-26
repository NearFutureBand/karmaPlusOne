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
  constructor() {
    super();
    this.pubnub = new PubNubReact({
        publishKey: 'pub-c-6fbf1be3-2afd-427a-acf3-1e57bb3b85a9',
        subscribeKey: 'sub-c-b9578b06-c160-11e9-9789-aed726b8f656'
    });
    this.pubnub.init(this);
    PushNotification.configure({
      // Called when Token is generated.
      onRegister: function(token) {
          console.log( 'TOKEN:', token );
          if (token.os == "ios") {
            this.pubnub.push.addChannels(
            {
              channels: ['notifications'],
              device: token.token,
              pushGateway: 'apns'
            });
            // Send iOS Notification from debug console: {"pn_apns":{"aps":{"alert":"Hello World."}}}
          } else if (token.os == "android"){
            this.pubnub.push.addChannels(
            {
              channels: ['notifications'],
              device: token.token,
              pushGateway: 'gcm' // apns, gcm, mpns
            });
            // Send Android Notification from debug console: {"pn_gcm":{"data":{"message":"Hello World."}}}
          }  
      }.bind(this),
      // Something not working?
      // See: https://support.pubnub.com/support/solutions/articles/14000043605-how-can-i-troubleshoot-my-push-notification-issues-
      // Called when a remote or local notification is opened or received.
      onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
        // Do something with the notification.
        // Required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      // ANDROID: GCM or FCM Sender ID
      senderID: "862616243398",
    });
  }
  
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
