import React, { Component } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addChatText } from '../../actions/ChatActions';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

class ChatWindow extends Component {
  constructor() {
    super();
    this.state = ({ message: '' });
  }

  onChangeText = (text) => {
    this.setState({ message: text });
  }

  onButtonPress = () => {
    const { message } = this.state;
    this.props.addChatText('You', message);
  }

  renderRow = (chat) => {
    return (
      <View>
        <Text>{chat.item.name}</Text>
        <Text>{chat.item.message}</Text>
      </View>
    );
  }

  render() {
    const { message } = this.state;
    const { chatList } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={styles.flastListStyle}
          data={chatList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderRow}
        />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Input
              placeholder="Enter chat message..."
              value={message}
              onChangeText={this.onChangeText}
              editable
            />
          </View>
          <View style={{ width: 50, height: 30 }}>
            <Button
              enabled
              onPress={this.onButtonPress}
            >
              Enter
            </Button>
          </View>
        </View>
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
  chatList: state.chat.chatList,
});

export default connect(mapStateToProps, {
  addChatText,
})(ChatWindow);
