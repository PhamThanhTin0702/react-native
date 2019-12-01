import React, {Component} from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

export default class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: "TextInput is a basic component that allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted."
        }
    }
    render() {
        return (
            <View style = { styles.container }>
                <View style = { styles.header }>
                    <Image
                        style = { styles.avatar }
                        source = {{ uri: "/Users/phamthanhtan/Desktop/React-Native/Test/images/background/landscape.png" }}
                    />
                </View>
                <View style = { styles.content }>
                    <Text style = { styles.title }>This Is A React Native</Text>
                    <Text style = { styles.textConent }> {this.state.content} </Text>
                </View>
                <View style = { styles.footer }>
                    <View>
                        <Text>Thanh Tin</Text>
                        <Text>7 Hours</Text>
                    </View>
                    <View>
                        <Image
                            style = { styles.iconStar }
                            source = {{ uri: "/Users/phamthanhtan/Desktop/React-Native/Test/images/icons/star.png" }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        height: 500,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        flexDirection: 'column',
    },
    header: {
        backgroundColor: 'pink',
        flex: 3,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center'
    },
    content: {
        backgroundColor: '#F3F3F3',
        flex: 6,
        padding: 20
    },
    footer: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopWidth: 1,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatar: {
        height: '100%',
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    name: {
        fontSize: 30
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 20
    },
    textConent: {
        fontSize: 20,
        letterSpacing: 1,
        lineHeight: 30
    },
    iconStar: {
        height: 35,
        width: 35,
        borderRadius: 35/2
    }
})