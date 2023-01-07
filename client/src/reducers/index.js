import { combineReducers } from "redux";
import sessionsReducer from "./sessionsReducer";
import errorsReducer from "./errorsReducer";
import notebooksReducer from "../features/notebooks/notebooksSlice";
import usersReducer from "../features/users/usersSlice";

export default combineReducers({
	errors: errorsReducer,
	sessions: sessionsReducer,
	notebooks: notebooksReducer,
	users: usersReducer,
});
