import React, { Component } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { searchMovies } from '../../actions/MovieActions';
import MovieListEntry from '../../components/movies/MovieListEntry';
import Input from '../../components/common/Input';
import Spinner from '../../components/common/Spinner';


class MovieSearch extends Component {
  constructor() {
    super();
    this.state = { searchQuery: 'Batman' };
  }

  componentWillMount() {
    const { searchQuery } = this.state;
    this.props.searchMovies(searchQuery);
  }

  onChangeText = (text) => {
    this.setState({ searchQuery: text });
    this.props.searchMovies(text);
  }

  onRowPress = (movie) => {
    Actions.movieDetail({ imdbID: movie.item.imdbID });
  }

  renderRow = (movie) => {
    return (
      <TouchableOpacity onPress={() => this.onRowPress(movie)}>
        <MovieListEntry movie={movie.item} />
      </TouchableOpacity>
    );
  }

  renderMovieList() {
    const { movieList, loading } = this.props;
    if (loading) {
      return (
        <View style={{ flex: 1 }}>
          <Spinner />
        </View>
      );
    }
    if (movieList) {
      return (
        <View style={{ flex: 1 }}>
          <FlatList
            style={styles.flastListStyle}
            data={movieList.Search}
            keyExtractor={movie => movie.imdbID}
            renderItem={this.renderRow}
          />
        </View>
      );
    }
    return <View />;
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Input
          placeholder="Search for movie by name..."
          value={searchQuery}
          onChangeText={this.onChangeText}
          editable
        />
        {this.renderMovieList()}
      </View>
    );
  }
}

const styles = {
  flastListStyle: {
    margin: 10,
  },
};

const mapStateToProps = state => ({
  movieList: state.movies.movieList,
  loading: state.movies.loading,
});

export default connect(mapStateToProps, {
  searchMovies,
})(MovieSearch);
