export function getRooms(rooms) {
	return (dispatch) => {
		dispatch({
			type: 'GET_ROOMS', 
			rooms
		})
	}
}

export function getRoom(room) {
	return { type: 'GET_ROOM', room}
}

