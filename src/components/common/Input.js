import React, { PureComponent } from 'react';
import { TextInput, View } from 'react-native';

class Input extends PureComponent {
  focus() {
    this.input.focus();
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <TextInput
          ref={ref => this.input = ref}
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          placeholderTextColor="#999999"
          autoCorrect={false}
          style={styles.inputStyle}
          value={this.props.value}
          underlineColorAndroid="transparent"
          onChangeText={this.props.onChangeText}
          keyboardType={this.props.keyboardType}
          autoCapitalize={this.props.autoCapitalize}
          editable={this.props.editable}
          autoFocus={this.props.autoFocus}
          onSubmitEditing={this.props.onSubmitEditing}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    height: 45,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333333',
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'transparent',
    color: '#111111',
    fontSize: 17,
  },
};

export default Input;
