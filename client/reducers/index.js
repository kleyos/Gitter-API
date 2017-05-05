import { combineReducers } from 'redux'

import user from './user'
import rooms from './rooms'
import messages from './messages'
import room from './room'
import search from './search'


const rootReducer = combineReducers({ messages, user, rooms, room, search })

export default rootReducer
