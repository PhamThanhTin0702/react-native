import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Modal,
  TextInput,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import socket from 'socket.io-client';
import LinearGradient from 'react-native-linear-gradient';

var config = require('../config/config');

export default class NewFeed extends Component {
  constructor(props) {
    super(props);
    this.io = socket(config.server);
    this.state = {
      images: [
        `https://live.staticflickr.com/1868/44144079631_73dca88513_b.jpg`,
        `https://live.staticflickr.com/1868/44144079631_73dca88513_b.jpg`,
        `https://ze-robot.com/images/source/1799.jpg`,
      ],
      modalVisible: false,
      chats: [],
      messageInput: '',
    };
  }

  componentDidMount() {
    this.io.on('listMessage', message => {
      this.setState({
        messageInput: '',
        chats: this.state.chats.concat(message),
      });
    });
  }

  UNSAFE_componentWillMount() {
    this.io.on('sendMessage', messages => {
      this.setState({
        chats: [...messages],
      });
    });
  }

  sendMessage = () => {
    const {navigation} = this.props;
    var infoMessage = {
      email: navigation.getParam('email'),
      text: this.state.messageInput,
    };
    this.io.emit('receiveMessage', infoMessage);
    this.setState({
      messageInput: '',
      chats: this.state.chats.concat(infoMessage),
    });
  };

  renderMessage = () => {
    return this.state.chats.map(message => (
      <View
        style={[
          style.rowItem,
          style.paddingView,
          style.centerJustity,
          style.boderViewMessage,
        ]}>
        <Image
          style={[style.iconAvatar]}
          source={(source = require('../assets/images/icons/man.png'))}
        />
        <View style={[style.columnItem]}>
          <Text style={[style.textStyle, style.limitText]}>
            {message.email}
          </Text>
          <Text style={[style.textStyle, style.limitText]}>{message.text}</Text>
        </View>
      </View>
    ));
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  loadPageImage = () => {
    var widthWindow = Dimensions.get('window').width;
    var heightWindow = Dimensions.get('window').height;
    var images = this.state.images;
    return images.map((item, index) => (
      <View style={{flex: 1, width: widthWindow, position: 'relative'}}>
        <View
          style={[
            style.paddingView,
            style.rowItem,
            style.centerJustity,
            style.childView,
          ]}>
          <Image
            source={(source = require('../assets/images/icons/man.png'))}
            style={[style.iconAvatar]}
          />
          <View>
            <Text style={[style.textStyle]}>tin.pham</Text>
            <Text numberOfLines={1} style={[style.textStyle]}>
              The landscape is so amazing
            </Text>
          </View>
        </View>

        <ImageBackground source={{uri: item}} style={{flex: 1}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#000000', '#333333']}
            style={style.linearGradient}></LinearGradient>
        </ImageBackground>
        <View
          style={[
            style.rowItem,
            style.spaceItem,
            style.paddingView,
            style.actionBar,
            style.childActionBar,
          ]}>
          <View style={[style.rowItem]}>
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(true);
              }}
              style={[style.rowItem]}>
              <Image
                source={
                  (source = require('../assets/images/icons/comment.png'))
                }
                style={[style.icon]}
              />
              <Text style={style.textStyle}>Comment</Text>
            </TouchableOpacity>
          </View>
          <View style={[style.rowItem]}>
            <TouchableOpacity style={[style.rowItem]}>
              <Image
                source={(source = require('../assets/images/icons/hearth.png'))}
                style={[style.icon]}
              />
              <Text style={style.textStyle}>Rate</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={{flex: 3, width: widthWindow}}>
            <TouchableOpacity
              style={{height: '100%'}}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}></TouchableOpacity>
          </View>
          <View style={[style.sizeModal, style.borderModal]}>
            <View>
              <View>
                <ScrollView>
                  <View style={style.borderViewCaption}>
                    <Text style={[style.textStyle, style.centerMultiText]}>
                      There are several definitions of what constitutes a
                      landscape, depending on context. In common usage however,
                      a landscape refers either to all the visible features of
                      an area of land (usually rural), often considered in terms
                      of aesthetic appeal, or to a pictorial representation of
                      an area of countryside, specifically within the genre of
                      landscape painting. When people deliberately improve the
                      aesthetic appearance of a piece of land—by changing
                      contours and vegetation, etc.—it is said to have been
                      landscaped, though the result may not constitute a
                      landscape according to some definitions. The word
                      landscape (landscipe or landscaef) arrived in England—and
                      therefore into the English language—after the fifth
                      century, following the arrival of the Anglo-Saxons; these
                      terms referred to a system of human-made spaces on the
                      land. The term landscape emerged around the turn of the
                      sixteenth century to denote a painting whose primary
                      subject matter was natural scenery.
                    </Text>
                  </View>
                  {this.renderMessage()}
                </ScrollView>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              width: widthWindow,
              alignItems: 'center',
              backgroundColor: '#0e0e0e',
              padding: 10,
              flexDirection: 'row',
            }}>
            <TextInput
              style={[style.borderTextInput, style.textStyle]}
              placeholder="Type comment here..."
              placeholderTextColor="white"
              multiline={true}
              value={this.state.messageInput}
              onChangeText={value => {
                this.setState({
                  messageInput: value,
                });
              }}
            />
            <TouchableOpacity
              onPress={() => {
                this.sendMessage();
              }}>
              <Image
                style={style.iconSend}
                source={(source = require('../assets/images/icons/arrow.png'))}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    ));
  };

  render() {
    var widthWindow = Dimensions.get('window').width;
    var heightWindow = Dimensions.get('window').height;
    return (
      <View style={style.main}>
        <View style={style.feed}>
          <ScrollView horizontal={true} pagingEnabled={true}>
            {this.loadPageImage()}
          </ScrollView>
        </View>

        <View style={[style.footer, style.centerItem]}>
          <TouchableOpacity>
            <Image
              source={(source = require('../assets/images/icons/plus.png'))}
              style={[style.sizeIcon]}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    padding: 0.1,
  },
  feed: {
    flex: 9,
  },
  footer: {
    flex: 1,
    padding: 3,
  },
  sizeIcon: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBar: {},
  rowItem: {
    flexDirection: 'row',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  spaceItem: {
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
  },
  paddingView: {
    padding: 10,
  },
  statusBar: {
    backgroundColor: 'black',
  },
  columnItem: {
    flexDirection: 'column',
  },
  iconAvatar: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    marginRight: 10,
  },
  centerJustity: {
    alignItems: 'center',
  },
  sizeModal: {
    flex: 6,
    width: Dimensions.get('window').width,
    bottom: 0,
    backgroundColor: '#0e0e0e',
    padding: 10,
  },
  borderModal: {
    borderWidth: 0.5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: 'white',
    borderBottomColor: 'black',
  },
  viewButtonClose: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50,
  },
  iconSend: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
  },
  centerMultiText: {
    textAlign: 'justify',
  },
  borderTextInput: {
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    width: 300,
    paddingLeft: 10,
    paddingTop: 10,
    marginRight: 10,
  },
  boderViewMessage: {
    borderColor: '#1ac7cf',
    borderWidth: 0.4,
    marginBottom: 10,
    borderRadius: 10,
  },
  borderViewCaption: {
    marginBottom: 15,
  },
  limitText: {
    maxWidth: 300,
  },
  childView: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  childActionBar: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
  linearGradient: {
    height: 60,
    opacity: 0.1,
    zIndex: 1,
    borderRadius: 5
  },
});
