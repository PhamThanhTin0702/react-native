import React, {Component} from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, useState } from 'react-native'
import {connect} from 'react-redux'

export default class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: "TextInput is a basic component that allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted."
        }
    }
    render() {
        return (
                <View style = { styles.container } >
                    <View style = { styles.header }>
                        <Image
                            style = { styles.avatar }
                            source = {{ uri: "/Users/phamthanhtan/Desktop/React-Native/Test/images/background/images1.jpeg" }}
                        />
                    </View>
                    <View style = { styles.content }>
                        <Text numberOfLines = {2} style = { styles.title}>{this.props.blog.title}</Text>
                        <Text style = { styles.textConent }>{this.props.blog.name}</Text>
                        <Text style = { styles.date }>{this.props.blog.date}</Text>
                    </View>
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
    },
    avatar: {
        height: 179,
        width: 372,
        resizeMode: 'stretch'
    },
    name: {
        fontSize: 30
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
        fontSize: 30,
    },
    iconStar: {
        height: 35,
        width: 35,
        borderRadius: 35/2,
    },
    date: {
        color: '#FF6666',
        textDecorationLine: 'underline',
        paddingBottom: 10,
        color: '#66FFFF'
    }
})