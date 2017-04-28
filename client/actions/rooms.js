export function getRooms(room) {
	return (dispatch) => {
		dispatch({
			type: 'GET_ROOMS', 
			room
		})
	}
}

export function getRoomId(roomId) {
	return { type: 'GET_ROOMID', roomId}
}