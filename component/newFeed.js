import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Modal,
  
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PageList from 'react-native-page-list';

export default class NewFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        `https://live.staticflickr.com/1868/44144079631_73dca88513_b.jpg`,
        `https://live.staticflickr.com/1868/44144079631_73dca88513_b.jpg`,
        `https://ze-robot.com/images/source/1799.jpg`,
      ],
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  loadPageImage = () => {
    var widthWindow = Dimensions.get('window').width;
    var heightWindow = Dimensions.get('window').height;
    var images = this.state.images;
    return images.map((item, index) => (
      <View style={{flex: 1, width: widthWindow}}>
        <View style={[style.paddingView, style.rowItem, style.centerJustity]}>
          <Image
            source={(source = require('../assets/images/icons/man.png'))}
            style={[style.iconAvatar]}
          />
          <View>
            <Text style={[style.textStyle]}>tin.pham</Text>
            <Text numberOfLines={1} style={[style.textStyle]}>
              The landscape is so amazing
            </Text>
          </View>
        </View>
        <Image source={{uri: item}} style={{flex: 1}} />
        <View
          style={[
            style.rowItem,
            style.spaceItem,
            style.paddingView,
            style.actionBar,
          ]}>
          <View style={[style.rowItem]}>
            <TouchableOpacity 
            onPress={() => {
                this.setModalVisible(true);
            }}
            style={[style.rowItem]}>
              <Image
                source={
                  (source = require('../assets/images/icons/comment.png'))
                }
                style={[style.icon]}
              />
              <Text style={style.textStyle}>Comment</Text>
            </TouchableOpacity>
          </View>
          <View style={[style.rowItem]}>
            <TouchableOpacity style={[style.rowItem]}>
              <Image
                source={(source = require('../assets/images/icons/hearth.png'))}
                style={[style.icon]}
              />
              <Text style={style.textStyle}>Rate</Text>
            </TouchableOpacity>
          </View>
        </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            >
            <View style = {{ flex: 4, width: widthWindow}}>
                <TouchableOpacity 
                style = {{height: '100%'}}
                onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                }}>  
                </TouchableOpacity>
            </View>
            <View style={ [style.sizeModal, style.borderModal] }>
              <View>
                
                <View>
                    <ScrollView>
                        <View style = { style.borderViewCaption }>
                            <Text style = {[style.textStyle, style.centerMultiText]}>
                                There are several definitions of what constitutes a landscape, depending on context. In common usage however, a landscape refers either to all the visible features of an area of land (usually rural), often considered in terms of aesthetic appeal, or to a pictorial representation of an area of countryside, specifically within the genre of landscape painting. When people deliberately improve the aesthetic appearance of a piece of land—by changing contours and vegetation, etc.—it is said to have been landscaped, though the result may not constitute a landscape according to some definitions. The word landscape (landscipe or landscaef) arrived in England—and therefore into the English language—after the fifth century, following the arrival of the Anglo-Saxons; these terms referred to a system of human-made spaces on the land. The term landscape emerged around the turn of the sixteenth century to denote a painting whose primary subject matter was natural scenery.
                            </Text>
                        </View>
                    </ScrollView>
                </View>
              </View>
              <View>

              </View>
            </View>
          </Modal>

      </View>
    ));
  };

  render() {
    var widthWindow = Dimensions.get('window').width;
    var heightWindow = Dimensions.get('window').height;
    return (
      <View style={style.main}>
        <View style={style.feed}>
          <ScrollView horizontal={true} pagingEnabled={true}>
            {this.loadPageImage()}
          </ScrollView>
        </View>
        <View style={[style.footer, style.centerItem]}>
          <TouchableOpacity>
            <Image
              source={(source = require('../assets/images/icons/plus.png'))}
              style={[style.sizeIcon]}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    padding: 0.1,
  },
  feed: {
    flex: 9,
  },
  footer: {
    flex: 1,
    padding: 3,
  },
  sizeIcon: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBar: {
    borderWidth: 1,
    //borderTopColor: 'white',
    borderBottomColor: 'white',
  },
  rowItem: {
    flexDirection: 'row',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  spaceItem: {
    justifyContent: 'space-between',
  },
  paddingView: {
    padding: 10,
  },
  statusBar: {
    backgroundColor: 'black',
  },
  columnItem: {
    flexDirection: 'column',
  },
  iconAvatar: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    marginRight: 10,
  },
  centerJustity: {
    alignItems: 'center',
  },
  sizeModal: {
    flex: 6,
     width: Dimensions.get('window').width, 
     bottom: 0,
     backgroundColor: '#0e0e0e',
     padding: 10
  },
  borderModal: {
      borderWidth: 1,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      borderColor: 'white'
    },
    viewButtonClose: {
        position: 'absolute',
        right: 0,
        height: 50,
        width: 50
    },
    iconClose: {
        height: 20,
        width: 20,
        borderRadius: 20/2
    },
    centerMultiText: {
        textAlign: 'justify'
    },
    borderViewCaption: {
        borderTopColor: '#0e0e0e',
        borderRightColor: '#0e0e0e',
        borderLeftColor: '#0e0e0e',
        borderBottomColor: 'white',
        borderWidth: 1,
        marginTop: 20
    }
});
