import React, {Component} from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Text, Image, Modal} from 'react-native'
import axios from 'axios'
var config = require('../config/config')

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    signIn = () => {
        
            var infoUser = {
                email: this.state.email,
                password: this.state.password
            }
            axios.post(config.server+'/api/user', {infoUser}).then((result) => {
                alert('Registry Successfully')
            }).catch((err) => {
                alert('Registry Fail or email is existed')
            })
        
    }


    login = async () => {
        try {
            var result = await axios.get(config.server+'/api/user/login/'+this.state.email+'/'+this.state.password, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            })
            if(result.data.data) {
                var emailUser = result.data.data.email
                this.props.navigation.navigate('NewFeed', {email: emailUser})
                this.setState({
                    email: '',
                    password: ''
                })
            } else {
                alert('Email or password is incorrect')
            }
        } catch(error) {
            alert('Login Fail')
        }
    }
        



    render() {
        return (
            <View style = {[style.main, style.centerItem]}>
                <Image 
                style = { [style.sizeLogo] }
                source = {(source = require('../assets/images/icons/share.png'))} 
                />
                <View style = { [style.formLogin, style.centerJustity] }>
                    <View style = {[ style.rowItem, style.marginItem, style.centerAlign] }>
                        <Image 
                        style = { [style.sizeIcon] }
                        source = {(source = require('../assets/images/icons/user.png'))} />
                        <TextInput
                        value = {this.state.email} 
                        placeholder= "Email" 
                        style = {style.textInput} 
                        placeholderTextColor = "white"
                        onChangeText = {(value)=> {
                            this.setState({
                                email: value
                            })
                        }}/>
                        
                    </View>

                    <View style = { [ style.rowItem, style.marginItem, style.centerAlign] }>
                        <Image 
                        style = { [style.sizeIcon] }
                        source = {(source = require('../assets/images/icons/lock.png'))} />
                        <TextInput 
                        value = {this.state.password}
                        placeholder= "Password" 
                        style = {style.textInput} 
                        secureTextEntry={true} 
                        placeholderTextColor = "white"
                        onChangeText = {(value)=> {
                            this.setState({
                                password: value
                            })
                        }}/>
                        
                    </View>
                    
                    <View style = { [style.rowItem, style.centerAlign, style.centerJustity]}>
                        <TouchableOpacity style = { [style.sizeButton] } 
                        onPress = {()=> {
                            this.login()
                        }}>
                            <Text style = { style.colorText }>Login</Text>                            
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style = { [style.sizeButton] }
                        onPress = {()=> {
                            this.signIn()
                        }}>
                            <Text style = { style.colorText }>Sign up</Text>                            
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#00253f',
        padding: 1,
    },
    formLogin: {
        height: 300,
        width: 400,
        //backgroundColor: 'yellow',
        padding: 20
    },
    rowItem: {
        flexDirection: 'row'
    },
    centerItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    sizeIcon: {
        height:25,
        width: 25,
        borderRadius: 25/2,
        marginRight: 15
    },
    textInput: {
        width: 270,
        height: 40,
        fontSize: 25,
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },
    centerJustity: {
        justifyContent: 'center'
    },
    centerAlign: {
        alignItems: 'center'
    },
    marginItem: {
        marginBottom: 40,
    },
    colorText: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    },
    sizeButton: {
        height: 40,
        width: 100,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginRight: 20,
    },
    sizeLogo: {
        height: 120,
        width: 120,
        borderRadius: 120/2
    }
})