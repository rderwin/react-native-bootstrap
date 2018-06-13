import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
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
    this.setState({ message: '' });
    this.input.focus();
  }

  renderRow = (chat) => {
    return (
      <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
        <Text style={styles.headerTextStyle}>
          {chat.item.name}
        </Text>
        <Text style={styles.smallTextStyle}>
          {chat.item.message}
        </Text>
      </View>
    );
  }

  render() {
    const { message } = this.state;
    const { chatList } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          ref={ref => this.flatList = ref}
          style={styles.flastListStyle}
          data={chatList}
          keyExtractor={(item, index) => index.toString()}
          onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
          onLayout={() => this.flatList.scrollToEnd({ animated: true })}
          renderItem={this.renderRow}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Input
              ref={ref => this.input = ref}
              placeholder="Enter chat message..."
              value={message}
              onSubmitEditing={this.onButtonPress}
              onChangeText={this.onChangeText}
              editable
            />
          </View>
          <View style={{ width: 80, height: 40 }}>
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
    flex: 1,
  },
  headerTextStyle: {
    fontSize: 15,
    color: '#333333',
    marginHorizontal: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  smallTextStyle: {
    fontSize: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    color: '#555555',
  },
};

const mapStateToProps = state => ({
  chatList: state.chat.chatList,
});

export default connect(mapStateToProps, {
  addChatText,
})(ChatWindow);
