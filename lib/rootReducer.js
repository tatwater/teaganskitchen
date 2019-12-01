import { combineReducers } from 'redux';

import clock from './clock/reducers'
import count from './count/reducers'
import mainNav from './main-nav/reducers'
import placeholder from './placeholder/reducers'

export default combineReducers({
  clock,
  count,
  mainNav,
  placeholder,
})
