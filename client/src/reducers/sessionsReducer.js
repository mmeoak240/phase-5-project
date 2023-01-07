const initialState = {
	currentUser: {},
	loggedIn: false,
};

const sessionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				currentUser: action.payload,
				loggedIn: true,
			};
		case "SIGNUP":
			return {
				currentUser: action.payload,
				loggedIn: true,
			};
		case "LOGOUT":
			return initialState;

		default:
			return state;
	}
};

export default sessionsReducer;
