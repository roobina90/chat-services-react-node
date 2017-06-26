import { combineReducers } from 'redux'
//import messages from './messagesReducer'
import rooms from './roomsReducer'
//import services from './servicesReducer'
import activeRoom from './activeRoomReducer' 
//import user from './usersReducer'

const rootReducer = combineReducers({
  //messages,
  rooms,
  activeRoom//,
 // services
 // user
})

export default rootReducer