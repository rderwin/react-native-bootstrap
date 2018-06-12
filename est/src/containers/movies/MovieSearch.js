import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { searchMovies } from '../../actions/MovieActions';

class MovieSearch extends Component {
  componentWillMount() {
    this.props.searchMovies('Batman');
  }

  renderRow(movie) {
    console.log('this called');
    console.log(movie);
    console.log(movie.item.Title);
    return <Text>{movie.item.Title}</Text>;
  }

  render() {
    const { movieList } = this.props;
    if (movieList) {
      return (
        <View>
          <FlatList
            data={movieList.Search}
            keyExtractor={movie => movie.imdbID}
            renderItem={this.renderRow}
          />
          <Text>hi</Text>
                    <Text>hi</Text>
                              <Text>hi</Text>
        </View>
      );
    }
    return <View />;
  }
}


const mapStateToProps = state => ({
  movieList: state.movies.movieList,
});

export default connect(mapStateToProps, {
  searchMovies,
})(MovieSearch);
