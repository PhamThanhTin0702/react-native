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

  constructor(props) {
    super(props)
    this.state = {
      showBarIconBlog: false,
      statusShowBlog: () => {
        return (Array(array.feeds.length).fill(false))
      }
    }
  }


  UNSAFE_componentWillMount() {
  }


  componentDidUpdate() {
  }

  UNSAFE_componentWillUpdate() {

  }
  setShowRatingBlog = (index) => {
    const currentShow = this.state.statusShowBlog()[index]
    this.setState({
      statusShowBlog: () => {
        return (
          Array(array.feeds.length).fill(false).fill(!currentShow, index, index+1)
        )
      }
    })
  }

  render() {
    const feeds = array.feeds;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/icons/man.png')}
            style={styles.avatar}
          />
          <TextInput
            style={styles.input}
            placeholder="Type something to search ..."
            placeholderTextColor = "black"
          />
          <TouchableOpacity style = { styles.button_icon_alert }>
            <Image
              source={source=require('../assets/images/icons/bell.png')}
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
                name = {item.name}
                status = {true}
                onLongPress = { () => {
                  this.setShowRatingBlog(index)
                }}
                

                onPress={() => {
                  if(this.state.statusShowBlog()[index] === true) {
                    this.setShowRatingBlog(index)
                  } else {
                    this.props.navigation.navigate('BlogDetail', {
                      blogdetail: item,
                    });
                  }
                  
                }}>
                <Blog blog={item} showBlog={this.state.statusShowBlog()[index]} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Image
              source={source=require('../assets/images/icons/avatar.png')}
              style={styles.icon_footer}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('PostBlog');
            }}>
            <Image
              source={source=require('../assets/images/icons/plus.png')}
              style={styles.icon_footer}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={source=require('../assets/images/icons/feed.png')}
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
  },
  
});
