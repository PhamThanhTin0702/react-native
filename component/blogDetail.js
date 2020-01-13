import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import comments from '../data/comment';
import socket from 'socket.io-client'

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.io = socket('http://localhost:5000')
    this.state = {
      images: [
        'http://wayscapecounseling.org/wp-content/uploads/2018/08/Blurred-adventure-calm-clouds-414171.jpg',
        'https://live.staticflickr.com/1868/44144079631_73dca88513_b.jpg',
        'https://ze-robot.com/images/source/1799.jpg',
      ],
      comments: comments.getComment(),
      commentUser: '',
      chatMessages: []
    };
  }


  componentDidMount() {
    this.io.on('sendMessage', messages => {
      this.setState({
        chatMessages: [...messages]
      })
    })
  }

  renderComment = (item) => {
    if(item.name == 'thanhtan') {
      return (
        <View style={styles.commentSelf}>
        <View style = {styles.user_comment}>
            <Text style = { styles.username }>{item.name}</Text>
            <Text>{item.comment}</Text>
        </View>
        <Image
          style={styles.avatar}
          source={(source = require('../assets/images/icons/man.png'))}
        />
      </View>
      )
    } else {
      return (
        <View style={styles.comment}>
        <Image
          style={styles.avatar}
          source={(source = require('../assets/images/icons/man.png'))}
        />
        <View style = {styles.user_comment}>
            <Text style = { styles.username }>{item.name}</Text>
            <Text>{item.comment}</Text>
        </View>
      </View>
      )
    }
  }
  
  createComment = () => {
    return this.state.chatMessages.map((item, index) => (
      this.renderComment(item)
    ));
  };

  sendComment = (username ,onComment) => {
    const commentUser = {
      name: username,
      comment: onComment
    }
      this.io.emit('receiveMessage', commentUser)
      var currentChatMessage = this.state.chatMessages
      currentChatMessage.push(commentUser)
      this.setState({
        chatMessages: [...currentChatMessage]
      })
      this.io.on('listMessage', (messages) => {
        console.log(messages)
      })
      
  }

  render() {
    const {navigation} = this.props;
    const blogdetail = navigation.state.params.blogdetail;

    return (
      <View style={styles.container}>
        <View style={styles.scroll_view}>
          <ScrollView>
            <View style={styles.image_slider_box}>
              <SliderBox images={this.state.images} />
            </View>
            <View style={styles.body}>
              <View style={styles.title}>
                <Text style={styles.text_title}>{blogdetail.title}</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.text_content}>{blogdetail.content}</Text>
              </View>
            </View>
            <View style={styles.list_comment}>
                {this.createComment()}  
            </View>
          </ScrollView>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity >
            <Image
              style={styles.icon_camera}
              source={
                (source = require('../assets/images/icons/photo-camera.png'))
              }
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input_comment}
            multiline={true}
            value = {this.state.commentUser}
            placeholder="Comment something"
            placeholderTextColor="black"
            onChangeText = { (text) => {
                this.setState({
                    commentUser: text
                })
            } }>
            </TextInput>
            <TouchableOpacity
            onPress = { () => {
                this.sendComment('thanhtan' ,this.state.commentUser)
                this.setState({
                    commentUser: ''
                })
            }}
            >
            <Image 
            style = { styles.icon_send_comment }
            source = {(source = require("../assets/images/icons/sendcomment.png"))}
            />
            </TouchableOpacity>
            
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  header: {
    height: 90,
    paddingLeft: 5,
    backgroundColor: '#A6FCF6',
    alignContent: 'center',
  },
  image_slider_box: {
    flex: 2,
  },
  body: {
    flex: 5,
    padding: 10,
    borderColor: 'gray',
    borderBottomWidth: 0.3,
  },
  button_back: {
    marginTop: 40,
  },
  title: {
    marginBottom: 30,
  },
  text_title: {
    fontSize: 40,
    fontFamily: 'Arciform',
    textAlign: 'center',
  },
  text_content: {
    fontSize: 20,
    fontFamily: 'Arciform',
    //letterSpacing: 0.5,
    textAlign: 'left',
  },
  footer: {
    flex: 1,
    //backgroundColor: 'red',
    //justifyContent: 'space-between',
    //alignContent: 'space-between',
    padding: 5,
    paddingLeft: 15,
    flexDirection: 'row',
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    alignItems: 'center',
    paddingRight: 10,
  },
  input_comment: {
    height: 40,
    width: 230,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 10,
    marginLeft: 20
  },
  scroll_view: {
    flex: 9,
  },
  icon_camera: {
    height: 40,
    width: 40,
  },
  list_comment: {
    flex: 3,
    padding: 20,
    width: 350
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 20,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginRight: 20,
  },
  user_comment: {
      flexDirection: 'column',
      borderRadius: 5,
      borderWidth: 0.5,
      backgroundColor: '#C0C0C0',
      padding: 5,
  },
  username: {
      fontWeight: 'bold'
  },
  icon_send_comment: {
      height: 30,
      width: 30,
      marginLeft: 15,
  },
  commentSelf: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 400,
    marginBottom: 20,
    paddingRight: 20,
    paddingLeft: 120
  }
});
