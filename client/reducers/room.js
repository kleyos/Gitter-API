function room(state={}, action){

	switch(action.type){
		case 'NEW_MESSAGE':
			return {...state, message:action.message} 

		case 'GET_ROOM':
			return {...state, item:action.room} 
		
		case 'CLEAR':
			return {...state, message: ''}
		default:
			return state
	}
}

export default room;
