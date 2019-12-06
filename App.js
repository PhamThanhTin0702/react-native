import React, {Component} from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TextInput, FlatList, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Provider } from 'react-redux'
import Blog from './component/blog'
import reducer from './reducer/reducer'
import {createStore} from 'redux'
import array from './data/data'
import {createAppContainer} from 'react-navigation'
import AppNavigator from './navigator'

console.disableYellowBox = true;
//import store from './store/store'
//import { add, sub } from './actions/action'

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {


  render() {
    return (
      <AppContainer/>
    )
  }
}



