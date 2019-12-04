import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  TextInput,
  Text
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import ImageResizer from 'react-native-image-resizer'

export default class PostBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: [

      ],
    };
  }

  UNSAFE_componentWillMount() {
    console.log("-----------------------")
    console.log("State image before update" ,this.state.imageFile)
    console.log("-----------------------")
  }

  componentDidUpdate() {
    console.log("-----------------------")
    console.log("State image after update" ,this.state.imageFile)
    console.log("-----------------------")
    //this.createImage()
    console.log("----------Reize Image-------------")
    this.resizeImage("/Users/phamthanhtan/Desktop/React-Native/Test/images/background/images.jpeg")
    console.log("----------Reize Image-------------")
  }

  resizeImage = async (imageUri) => {
    const outputPath = "/Users/phamthanhtan/Desktop/React-Native/Test/images/imageResize"
    var imageResize = await ImageResizer.createResizedImage(imageUri, 800, 800, 'JPEG',80)
    return imageResize.path
    //const imageUri = imageResize.uri

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
                this.openFolder();
              }}>
              <Image
                style={styles.icon_add}
                source={{
                  uri:
                    '/Users/phamthanhtan/Desktop/React-Native/Test/images/icons/plus.png',
                }}
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
          <Text style = { styles.text_title }>Title</Text>
          <TextInput style = { styles.input_title } multiline = {true}></TextInput>
          <Text style = { styles.text_title }>Please share something</Text>
          <TextInput style = { styles.input_content } multiline = {true}></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'yellow'
  },
  header: {
    flex: 2,
    paddingLeft: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5
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
    marginTop: 10,
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
    marginTop: 10
  },
  input_title: {
    height: 60,
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 30,
    marginBottom: 20
  },
  input_content: {
    height: '70%',
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 30,
  }
});
