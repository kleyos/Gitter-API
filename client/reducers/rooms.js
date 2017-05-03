function rooms(state=[], action){

	switch(action.type){
		case 'GET_ROOMS':
			//console.log(action.room)
			return [...state, ...action.rooms]

		// case 'CLEAR':
		// 	return [...state]
		case 'FIND_ROOM':
			return [...action.rooms]
		default:
			return state
	}
}

export default rooms;