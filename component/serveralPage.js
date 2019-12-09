import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import Blog from './blog'
import data from '../data/data'

export default class ServeralPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            feeds: data.feeds
        }
    }

    renderFeeds = (feeds) => {
        
          return (
            feeds.map((item, index) => (
              <TouchableOpacity
                key={index}
                name = {item.name}>
                <Blog blog={item}/>
              </TouchableOpacity>
            ))
          )
        
      }

    render() {
        return (
            <View style = { styles.container }>
                <View style = { styles.header }>
                    <Image
                        style = { styles.background_image }
                        source = { source = require('../assets/images/background/images.jpeg') }
                    />
                    <View style = { styles.avatar_username }>
                        <Image
                            style = {styles.image_avatar}
                            source = { source = require('../assets/images/icons/man.png') }
                        />
                        <Text style = { styles.text_name }>Pham Thanh Tin</Text>
                    </View>  
                </View>
                <View style = { styles.body }>
                    {this.renderFeeds(this.state.feeds)}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        //backgroundColor: 'red',
        position:'relative',
        height: 350,
        width: '100%',
        //marginBottom: 80,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5
    },
    body: {
        width: '100%',
        height: '100%',
        //backgroundColor: 'yellow'
    },
    background_image: {
        width: '100%',
        height: 250
    },
    image_avatar: {
        height: 150,
        width: 150,
        borderRadius: 150/2,
        borderWidth: 0.5,
        borderColor: 'gray',
        marginBottom: 10
    },
    avatar_username: {
        height: 200,
        position: 'absolute',
        top: '40%',
        right: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_name: {
        fontSize: 30,
        fontFamily: 'Arciform',
        textAlign: 'center'
    }
})
