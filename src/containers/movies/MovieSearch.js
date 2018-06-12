import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { searchMovies } from '../../actions/MovieActions';
import MovieListEntry from '../../components/movies/MovieListEntry';
import Input from '../../components/common/Input';
import Spinner from '../../components/common/Spinner';


class MovieSearch extends Component {
  componentWillMount() {
    this.props.searchMovies('Batman');
  }

  renderRow = (movie) => <MovieListEntry movie={movie.item} />;

  render() {
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
          <Input
            placeholder="Search for movie by name..."
            editable
          />
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
