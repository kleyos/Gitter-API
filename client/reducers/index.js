import { combineReducers } from 'redux'

import user from './user'
import rooms from './rooms'
import messages from './messages'
import room from './room'

const rootReducer = combineReducers({ messages, user, rooms, room })

export default rootReducer
