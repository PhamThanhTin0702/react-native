import { createStore } from 'redux'
import reducers from '../reducer/reducer'

var numberState = { number: 1}
const store = createStore(reducers, numberState)

export default store