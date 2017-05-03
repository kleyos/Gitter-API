function search(state=[], action){

	switch(action.type){
		case 'SEARCH':
			return [...action.rooms]
		default:
			return state
	}
}

export default search;