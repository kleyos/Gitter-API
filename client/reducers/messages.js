function massages(state=[], action){

	switch(action.type){
		case 'GET_MESSAGES':
			return [...state, ...action.messages]
		case 'CLEAR':
			return []
		default:
			return state
	}
}

export default massages;