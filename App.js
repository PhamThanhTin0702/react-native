import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, Image, TextInput, FlatList, TouchableOpacity} from 'react-native';
import Blog from './component/blog'

export default class App extends Component {
  
  render() {
    StatusBar.setHidden(false)
    return (
      <View style = {styles.container}>
        <View style = { styles.header }>
          <Image 
          source = {{ uri: '/Users/phamthanhtan/Desktop/React-Native/Test/images/icons/man.png' }} 
          style = { styles.avatar }/>
          <TextInput style = { styles.input } placeholder = "Type something to search ..."/>
        </View>
        <View style = { styles.content }>
          <Blog/>
        </View>
        <View style = {styles.footer}>
          <TouchableOpacity>
            <Image 
              source = {{ uri: '/Users/phamthanhtan/Desktop/React-Native/Test/images/icons/avatar.png' }} 
              style = { styles.icon_footer }
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source = {{ uri: '/Users/phamthanhtan/Desktop/React-Native/Test/images/icons/plus.png' }} 
              style = { styles.icon_footer }
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source = {{ uri: '/Users/phamthanhtan/Desktop/React-Native/Test/images/icons/feed.png' }} 
              style = { styles.icon_footer }
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
    marginTop: 50,
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    //backgroundColor: 'blue'
  },
  content: {
    flex: 8,
    //backgroundColor: 'yellow'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: 'brown',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopColor: 'gray',
    borderTopWidth: 1
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
  },
  input: {
    height: 35,
    width: 300,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 100,
    backgroundColor: '#E5E2E2',
    paddingLeft: 5,
  },
  icon_footer: {
    height: 40,
    width: 40,
  }
})