import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView, TextInput } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'

export default class BlogDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [
                "http://wayscapecounseling.org/wp-content/uploads/2018/08/Blurred-adventure-calm-clouds-414171.jpg",
                "https://live.staticflickr.com/1868/44144079631_73dca88513_b.jpg",
                "https://ze-robot.com/images/source/1799.jpg"
            ]
        }
    }

    render() {
        const { navigation } = this.props
        const blogdetail = navigation.state.params.blogdetail
        
        return (
            <View style={styles.container}>
                <View style = {styles.scroll_view}>
                <ScrollView>
                    <View style={styles.image_slider_box}>
                        <SliderBox images ={this.state.images}/>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.title}>
                            <Text style={styles.text_title}>{blogdetail.title}</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.text_content}>{blogdetail.content}</Text>
                        </View>
                    </View>
                    <View style = { styles.list_comment }>
                        <View style = { styles.comment }>
                            <Image 
                            style = { styles.avatar }
                            source = { source = require('../assets/images/icons/man.png') }
                            />
                            <Text>This is comment to demo app chat</Text>
                        </View>
                        <View style = { styles.comment }>
                            <Image 
                            style = { styles.avatar }
                            source = { source = require('../assets/images/icons/man.png') }
                            />
                            <Text> This is comment to demo app chat</Text>
                        </View>
                        <View style = { styles.comment }>
                            <Image 
                            style = { styles.avatar }
                            source = { source = require('../assets/images/icons/man.png') }
                            />
                            <Text> This is comment to demo app chat</Text>
                        </View>
                        <View style = { styles.comment }>
                            <Image 
                            style = { styles.avatar }
                            source = { source = require('../assets/images/icons/man.png') }
                            />
                            <Text> This is comment to demo app chat</Text>
                        </View>
                    </View>
                </ScrollView>
                </View>
                
                <View style = { styles.footer }>
                    <TouchableOpacity>
                        <Image
                            style = { styles.icon_camera}
                            source = { source = require('../assets/images/icons/photo-camera.png') }
                        />
                    </TouchableOpacity>
                    <TextInput style = { styles.input_comment } multiline = {true} placeholder = "Comment something" placeholderTextColor = "black" ></TextInput>
                </View>
            </View>
        )
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
        alignContent: 'center'
    },
    image_slider_box: {
        flex: 2,
    },
    body: {
        flex: 5,
        padding: 20,
        borderColor: 'gray',
        borderBottomWidth: 0.3
    },
    button_back: {
        marginTop: 40
    },
    title: {
        marginBottom: 30
    },
    text_title: {
        fontSize: 40,
        fontFamily: 'Arciform',
        textAlign: 'center'
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
        justifyContent: 'space-between',
        padding: 5,
        paddingLeft: 20,
        flexDirection: 'row',
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        alignItems: 'center',
        paddingRight: 20
    },
    input_comment: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 10,
        paddingLeft: 10,
        paddingTop: 10,
    },
    scroll_view: {
        flex: 9
    },
    icon_camera: {
        height: 40,
        width: 40
    },
    list_comment: {
        flex: 3,
        padding: 20
    },
    comment: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 40/2,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginRight: 20
    }
})