
import { combineReducers } from 'redux'
import userReducer from '../reducers/cleanReducers'
import tamirReducers from './tamirReducers'
export default combineReducers({
  users: userReducer,
  tamirs:tamirReducers
})