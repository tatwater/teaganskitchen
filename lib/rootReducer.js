import { combineReducers } from 'redux';

import event from './event/reducers';
import mainNav from './main-nav/reducers';


export default combineReducers({
  event,
  mainNav,
})
