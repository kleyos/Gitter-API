function rooms(state=[], action){

	switch(action.type){
		case 'GET_ROOMS':
			return [...state, ...action.room]

		// case 'CLEAR':
		// 	return [...state]
		default:
			return state
	}
}

export default rooms;