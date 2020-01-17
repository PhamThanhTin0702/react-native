import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  TextInput,
  Text,
  Button
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import ImageResizer from 'react-native-image-resizer'
import ImagePicker from 'react-native-image-picker'


export default class PostBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: [

      ],
    };
  }


  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: () => (
        <TouchableOpacity onPress = { () => {
          navigation.goBack()
        } }>
          <Image
            style = { styles.icon_send }
            source={(source=require('../assets/images/icons/network.png'))} 
          />
        </TouchableOpacity>
      )
    };
  };


  UNSAFE_componentWillMount() {
    
  }

  componentDidUpdate() {
  }

  resizeImage = async (imageUri) => {
    const outputPath = "/Users/phamthanhtan/Desktop/React-Native/Test/images/imageResize"
    var imageResize = await ImageResizer.createResizedImage(imageUri, 800, 800, 'JPEG',80)
    return imageResize.path
    //const imageUri = imageResize.uri

  }


  openPhotos = () => {
    const options = {
      title: 'Select Avatar',
      //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    try {
      ImagePicker.launchImageLibrary(options, (resImage) => {
        if(resImage.didCancel !== true) {
          this.setState({
            imageFile: this.state.imageFile.concat(resImage.uri)
          })
        }
      })
    } catch (error) {
      throw new Error(error)
    }
     
  }

  openFolder = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      if (file) {
        const imageResize = await this.resizeImage(file.uri)
        this.setState({
          imageFile: this.state.imageFile.concat(imageResize)
        })
      }

      //console.log('Hello')
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        Alert.alert("There aren't image!");
      } else {
        throw new Error(error);
      }
    }
  };

  closeImage = (index) => {
    const currentImageFile = this.state.imageFile
    currentImageFile.some((item, idx) => {
      if(idx === index) {
        const afterRemove = currentImageFile.splice(idx,1)
        this.setState({
          imageFile: currentImageFile
        })
        return true;
      }
      return false;
    })
  }

  createImage = () => {
    if(this.state.imageFile[this.state.imageFile.length-1]) {
      return (
        <TouchableOpacity style={styles.size_button_images}>
          <View >
            
          </View>
        </TouchableOpacity>
      )
    }
  };

  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={[styles.size_button_images, styles.button_icon_add]}
              onPress={() => {
                this.openPhotos();
              }}>
              <Image
                style={styles.icon_add}
                source={source=require('../assets/images/icons/plus.png')}
              />
            </TouchableOpacity>
            {this.state.imageFile.map((item, index) => (
                
                <TouchableOpacity style={styles.size_button_images} key = {index}>
                <Image
                  style={styles.size_images}
                  source={{
                    uri:
                      item
                  }}
                />
                <View style = { styles.size_close_image }>
                  <TouchableOpacity 
                  style = { styles.button_icon_close }
                  onPress = { () => {
                    this.closeImage(index)
                  } }>
                  
                    <Image
                      style = { styles.icon_close }
                      source = { source = require('../assets/images/icons/close.png') }
                    />
                  </TouchableOpacity>
                </View>
                </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.body}>
          <View style = { styles.viewTextTitle }>
            <Text style = { styles.text_title }>Share something</Text>
          </View>
          <View style = { styles.viewTextInputContent }>
            <TextInput 
            style = { styles.input_content } 
            multiline = {true} 
            placeholder = "Type here, If you'd like" 
            placeholderTextColor = "gray"></TextInput>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: '100%',
    paddingBottom: 0.1,
    backgroundColor: '#222222'
  },
  header: {
    flex: 2,
    paddingLeft: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10
    //backgroundColor: 'blue',
    //flexDirection: 'row'
  },
  body: {
    flex: 8,
    padding: 10,
    backgroundColor: 'black'
  },
  button_icon_add: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  icon_add: {
    height: 50,
    width: 50,
  },
  size_button_images: {
    height: '100%',
    width: 110,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 20,
    borderRadius: 10,
    borderStyle: 'dashed',
    backgroundColor: 'black'
  },
  size_images: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    resizeMode: 'stretch',
    position: 'absolute'
  },
  
  text_title: {
    fontSize: 25,
    color: 'white',
  },
  viewTextTitle: {
    backgroundColor: '#2f2f2f',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 0.5,
    borderColor: 'white',
    flex: 0.5,
    padding: 10,
    marginBottom: 10,
    borderBottomColor: '#1fdccd',
    borderBottomWidth: 2
  },

  viewTextInputContent: {
    borderWidth: 0.5,
    borderColor: 'gray',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingLeft: 10,
    flex: 9.5,
    marginBottom: 20
  },
  input_title: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 20,
    marginTop: 10,
    flex: 1,
  },
  input_content: {
    fontSize: 20,
    color: "white"
  },
  icon_send: {
    height: 30,
    width: 30,
    marginRight: 20,
  },
  size_close_image: {
    position: 'absolute',
    height: 30,
    width: 30,
    top: '2%',
    right: '2%',
    //backgroundColor: 'red',
    
  },
  icon_close: {
    height: 20,
    width: 20
  },
  button_icon_close: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
