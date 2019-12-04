import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'

export default class BlogDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [
                "/Users/phamthanhtan/Desktop/React-Native/Test/images/background/images.jpeg",
                "/Users/phamthanhtan/Desktop/React-Native/Test/images/background/images2.jpeg",
                "/Users/phamthanhtan/Desktop/React-Native/Test/images/background/images1.jpeg"
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
                    <SliderBox images={this.state.images}/>
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