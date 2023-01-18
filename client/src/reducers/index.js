import { combineReducers } from "redux";
import sessionsReducer from "./sessionsReducer";
import errorsReducer from "./errorsReducer";
import notebooksReducer from "../features/notebooks/notebooksSlice";
import usersReducer from "../features/users/usersSlice";
import notesReducer from "../features/notes/notesSlice";

export default combineReducers({
	errors: errorsReducer,
	notes: notesReducer,
	notebooks: notebooksReducer,
	users: usersReducer,
});
