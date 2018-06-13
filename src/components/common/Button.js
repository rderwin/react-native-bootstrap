import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class Button extends PureComponent {
  render() {
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity
          onPress={this.props.onPress}
          disabled={!this.props.enabled}
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>
            {this.props.children}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: 'blue',
    marginHorizontal: 10,
  },
  containerStyle: {
    flex: 1,
  },
};

export default Button;
