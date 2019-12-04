import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Blog from './blog';
import array from '../data/data';

export default class Feed extends Component {

  showInfo = item => {
    Alert.alert(item);
  };

  render() {
    const feeds = array.feeds;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri:
                '/Users/phamthanhtan/Desktop/React-Native/Test/images/icons/man.png',
            }}
            style={styles.avatar}
          />
          <TextInput
            style={styles.input}
            placeholder="Type something to search ..."
          />
          <TouchableOpacity style = { styles.button_icon_alert }>
            <Image
              source={{
                uri:
                  '/Users/phamthanhtan/Desktop/React-Native/Test/images/icons/bell.png',
              }}
              style={styles.icon_alert}
            />
            <View style = { styles.size_box_alert }>
              <Text style = { styles.text_alert }>1</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <ScrollView style={styles.scrollView}>
            {feeds.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.props.navigation.navigate('BlogDetail', {
                    blogdetail: item,
                  });
                  
                }}>
                <Blog blog={item} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Image
              source={{
                uri:
                  '/Users/phamthanhtan/Desktop/React-Native/Test/images/icons/avatar.png',
              }}
              style={styles.icon_footer}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('PostBlog');
            }}>
            <Image
              source={{
                uri:
                  '/Users/phamthanhtan/Desktop/React-Native/Test/images/icons/plus.png',
              }}
              style={styles.icon_footer}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{
                uri:
                  '/Users/phamthanhtan/Desktop/React-Native/Test/images/icons/feed.png',
              }}
              style={styles.icon_footer}
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
    marginTop: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'column',
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
    borderTopWidth: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  input: {
    height: 35,
    width: 250,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 100,
    backgroundColor: '#E5E2E2',
    paddingLeft: 5,
  },
  icon_footer: {
    height: 40,
    width: 40,
  },
  button_icon_alert: {
    position: 'relative',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon_alert: {
    height: 30,
    width: 30,
    position: 'absolute'
  },
  size_box_alert: {
    position: 'absolute',
    top: 3,
    right: 3,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20/2,
    backgroundColor: 'red',
  },
  text_alert: {
    color: 'white'
  }
});
