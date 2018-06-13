import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import MovieSearch from './containers/movies/MovieSearch';
import MovieDetail from './containers/movies/MovieDetail';
import ChatWindow from './containers/chat/ChatWindow';

const RouterComponent = () =>
  (
    <View style={{ flex: 1 }}>
      <Router>
        <Scene key="search">
          <Scene
            key="searchPage"
            component={MovieSearch}
            title="Movie Search"
            onRight={() => {
              Actions.chat();
            }}
            rightTitle="Live Chat"
            initial
          />
          <Scene
            key="chat"
            component={ChatWindow}
            title="Live Chat"
            leftTitle="settings"
          />
          <Scene
            key="movieDetail"
            component={MovieDetail}
            title="Movie Detail"
          />
        </Scene>
      </Router>
    </View>
  );

export default RouterComponent;
