import { createStackNavigator } from 'react-navigation-stack'
import Blog from './component/blog'
import BlogDetail from './component/blogDetail'
import Feed from './component/feed'
import PostBlog from './component/postBlog'
import NewFeed from './component/newFeed'
import Login from './component/login'
import {Button} from 'react-native'


const AppNavigator = createStackNavigator({
    // Feed: { screen:Feed, navigationOptions: { header: null } },
    // Blog: { screen: Blog },
    // BlogDetail: { screen: BlogDetail },
    // PostBlog: {screen: PostBlog}
    Login: { screen: Login,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#000000'
            }
        }
     },
    NewFeed: { 
        screen: NewFeed,
        navigationOptions:  {            
        }
    },
    PostBlog: {
        screen: PostBlog,
        navigationOptions: {
            
        }
    }
}, {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#0e0e0e',
        }
    },
    },
)

export default AppNavigator