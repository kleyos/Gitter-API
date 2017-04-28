export function getUser(user) {
	return (dispatch) => {
		dispatch({
			type: 'GET_USER', 
			user
		})
	}
}