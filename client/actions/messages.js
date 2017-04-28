export function getMessages(messages) {
	return (dispatch) => {
		dispatch({
			type: 'GET_MESSAGES', 
			messages
		})
	}
}

export function typeMessage(message) {
	return { type: 'NEW_MESSAGE', message}
}


