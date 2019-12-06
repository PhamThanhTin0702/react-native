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
            source={source=require('../assets/images/icons/send.png')} 
          ></Image>
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
        this.setState({
          imageFile: this.state.imageFile.concat(resImage.uri)
        })
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
        const preImageFile = [...this.state.imageFile]
        console.log(preImageFile)
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

  createImage = () => {
    if(this.state.imageFile[this.state.imageFile.length-1]) {
      return (
        <TouchableOpacity style={styles.size_button_images}>
          <Image
            style={styles.size_images}
            source={{
              uri:
                this.state.imageFile[1],
            }}
          />
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
                </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.body}>
          <Text style = { styles.text_title } >Title</Text>
          <TextInput style = { styles.input_title } multiline = {true} placeholder = "Please type title here"></TextInput>
          <Text style = { styles.text_title }>Share something</Text>
          <TextInput style = { styles.input_content } multiline = {true} placeholder = "Type here, If you'd like"></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: '100%',
    paddingBottom: 20,
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
  },
  button_icon_add: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_add: {
    height: 50,
    width: 50,
  },
  size_images: {
    height: 50,
    width: 50,
  },
  size_button_images: {
    height: 140,
    width: 110,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 20,
    borderRadius: 10,
  },
  size_images: {
    height: 140,
    width: 110,
    borderRadius: 10,
    resizeMode: 'stretch'
  },
  
  text_title: {
    fontSize: 25,
    height: 30,
    marginTop: 20,
    flex: 0.5,
  },
  input_title: {
    //height: 30,
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 30,
    marginTop: 10,
    flex:2
  },
  input_content: {
    height: '100%',
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 30,
    flex:6
  },
  icon_send: {
    height: 30,
    width: 30,
    marginRight: 10
  }
});
