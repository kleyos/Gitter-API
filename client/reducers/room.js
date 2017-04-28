function room(state={}, action){

	switch(action.type){
		case 'NEW_MESSAGE':
			return {...state, message:action.message} 

		case 'GET_ROOMID':
			return {...state, id:action.roomId} 
		
		case 'CLEAR':
			return {...state, message: ''}
		default:
			return state
	}
}

export default room;
