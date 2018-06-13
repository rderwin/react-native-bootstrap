import React from 'react';
import { createLogger } from 'redux-logger';
import { YellowBox } from 'react-native';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
YellowBox.ignoreWarnings(['Module RCTImageLoader requires']);
YellowBox.ignoreWarnings(['Class RTCxxModule']);

const logger = createLogger();

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

const App = () =>
  (
    <Provider store={store}>
      <Router />
    </Provider>
  );

export default App;
