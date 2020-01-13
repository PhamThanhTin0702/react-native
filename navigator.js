import { createStackNavigator } from 'react-navigation-stack'
import Blog from './component/blog'
import BlogDetail from './component/blogDetail'
import Feed from './component/feed'
import PostBlog from './component/postBlog'
import NewFeed from './component/newFeed'
import Login from './component/login'


const AppNavigator = createStackNavigator({
    // Feed: { screen:Feed, navigationOptions: { header: null } },
    // Blog: { screen: Blog },
    // BlogDetail: { screen: BlogDetail },
    // PostBlog: {screen: PostBlog}
    Login: { screen: Login },
    NewFeed: { 
        screen: NewFeed,
        navigationOptions:  {            
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