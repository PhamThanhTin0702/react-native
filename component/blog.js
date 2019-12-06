import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  useState,
} from 'react-native';
import {connect} from 'react-redux';

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content:
        'TextInput is a basic component that allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted.',
      isShow: this.props.showBlog,
    };
  }

  UNSAFE_componentWillMount() {
  }

  UNSAFE_componentWillUpdate() {
  }

  createBarIcon = () => {
    if (this.props.showBlog == true) {
      return (
        <View style={styles.bar_rating}>
          <TouchableOpacity>
            <Image
              style={styles.button_icon_rating}
              source={source=require('../assets/images/icons/very-happy.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.button_icon_rating}
              source={source=require('../assets/images/icons/neutral.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.button_icon_rating}
              source={source=require('../assets/images/icons/angry.png')}
            />
          </TouchableOpacity>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={source=require('../assets/images/background/images1.jpeg')}
          />
        </View>
        <View style={styles.content}>
          <Text numberOfLines={2} style={styles.title}>
            {this.props.blog.title}
          </Text>
          <Text style={styles.textConent}>{this.props.blog.name}</Text>
          <Text style={styles.date}>{this.props.blog.date}</Text>
          <Image
            style={styles.icon_rating}
            source={source=require('../assets/images/icons/very-happy.png')}
          />
        </View>
        {this.createBarIcon()}
      </View>
    );
  }
}

// export default connect(
//     state => {
//         return {
//             data: state
//         }
//     }
// ) (Blog)

var styles = StyleSheet.create({
  container: {
    height: 400,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'column',
    margin: 20,
    position: 'relative',
    // backgroundColor: 'red',
  },
  header: {
    flex: 5,
    alignItems: 'center',
  },
  content: {
    flex: 5,
    padding: 20,
    alignItems: 'center',
    alignContent: 'center',
    position: 'relative',
    paddingBottom: 10
  },
  avatar: {
    height: 179,
    width: 372,
    resizeMode: 'stretch',
  },
  name: {
    fontSize: 25,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Arciform',
    textDecorationLine: 'underline',
  },
  textConent: {
    fontSize: 15,
    fontFamily: 'Aerotis',
    fontSize: 27,
  },
  icon_rating: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  date: {
    color: '#FF6666',
    textDecorationLine: 'underline',
    paddingBottom: 10,
  },
  button_icon_rating: {
    height: 60,
    width: 60,
    marginLeft: 10,
    marginRight: 10,
  },
  bar_rating: {
    flexDirection: 'row',
    position: 'absolute',
    top: '50%',
    right: 60,
  },
});
