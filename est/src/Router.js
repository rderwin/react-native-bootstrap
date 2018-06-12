import React from 'react';
import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import MovieSearch from './containers/movies/MovieSearch';

const RouterComponent = () =>
  (
    <View style={{ flex: 1 }}>
      <Router>
        <Scene key="search">
          <Scene
            key="searchPage"
            component={MovieSearch}
            title="Movie Search"
            initial
          />
        </Scene>
      </Router>
    </View>
  );

export default RouterComponent;
