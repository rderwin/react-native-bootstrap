import React, { PureComponent } from 'react';
import { Text, View, Image } from 'react-native';

class MovieListEntry extends PureComponent {
  render() {
    const { movie } = this.props;
    if (!movie) {
      return <View />;
    }

    return (
      <View style={styles.containerStyle}>
        <View style={styles.holderStyle}>
          <Image
            style={styles.imageStyle}
            source={{ uri: movie.Poster }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{movie.Title}</Text>
            <Text style={styles.smallTextStyle}>{movie.Year}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  holderStyle: {
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'transparent',
    marginBottom: 10,
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
  },
  headerTextStyle: {
    fontSize: 15,
    color: '#333333',
    marginBottom: 10,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  miniViewStyle: {
    flexDirection: 'row',
    flex: 1,
  },
  smallTextStyle: {
    fontSize: 12,
    marginBottom: 10,
    color: '#333333',
  },
};

export default MovieListEntry;
