import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import landscape_1 from '../assets/images/background/images.jpeg'
//import landscape_2 from '../assets/images/background/images1.jpeg'
const image1 = require('../assets/images/background/images.jpeg'); 

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
                </ScrollView>
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
        flex: 6,
        padding: 20,
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
    }
})