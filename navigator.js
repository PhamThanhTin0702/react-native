import { createStackNavigator } from 'react-navigation-stack'
import Blog from './component/blog'
import BlogDetail from './component/blogDetail'
import Feed from './component/feed'
import PostBlog from './component/postBlog'


const AppNavigator = createStackNavigator({
    Feed: { screen:Feed, navigationOptions: { header: null } },
    Blog: { screen: Blog },
    BlogDetail: { screen: BlogDetail },
    PostBlog: {screen: PostBlog}
}, {initialRouteName: 'Feed'})

export default AppNavigator