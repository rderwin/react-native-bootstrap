import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/MovieActions';
import Spinner from '../../components/common/Spinner';


class MovieDetail extends Component {
  componentWillMount() {
    const { imdbID } = this.props;
    this.props.getMovieDetail(imdbID);
  }

  renderDetailPiece(title, detail) {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.headerTextStyle}>{title}</Text>
        <Text style={styles.smallTextStyle}>{detail}</Text>
      </View>
    );
  }

  render() {
    const { movieDetail, movieDetailLoading } = this.props;
    if (movieDetailLoading) {
      return (
        <View style={{ flex: 1 }}>
          <Spinner />
        </View>
      );
    }
    if (movieDetail) {
      console.log(movieDetail);
      return (
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, marginHorizontal: 30, alignItems: 'center' }}>
            <Text style={styles.titleTextStyle}>{movieDetail.Title}</Text>
            <Image
              style={styles.imageStyle}
              source={{ uri: movieDetail.Poster }}
            />
            {this.renderDetailPiece('Actors', movieDetail.Actors)}
            {this.renderDetailPiece('Awards', movieDetail.Awards)}
            {this.renderDetailPiece('Box Office', movieDetail.BoxOffice)}
            {this.renderDetailPiece('Country', movieDetail.Country)}
            {this.renderDetailPiece('Director', movieDetail.Director)}
            {this.renderDetailPiece('Genre', movieDetail.Genre)}
            {this.renderDetailPiece('Metascore', movieDetail.Metascore)}
            {this.renderDetailPiece('Plot', movieDetail.Plot)}
            {this.renderDetailPiece('Rated', movieDetail.Rated)}
            {this.renderDetailPiece('Released', movieDetail.Released)}
          </View>
        </ScrollView>
      );
    }
    return <View />;
  }
}

const styles = {
  imageStyle: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  titleTextStyle: {
    fontSize: 20,
    color: 'black',
    marginVertical: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerTextStyle: {
    fontSize: 15,
    color: '#111111',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  smallTextStyle: {
    fontSize: 12,
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center',
  },
};

const mapStateToProps = state => ({
  movieDetailLoading: state.movies.movieDetailLoading,
  movieDetail: state.movies.movieDetail,
});

export default connect(mapStateToProps, {
  getMovieDetail,
})(MovieDetail);
