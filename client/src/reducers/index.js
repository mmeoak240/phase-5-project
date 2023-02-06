import { combineReducers } from "redux";
// import errorsReducer from "./errorsReducer";
import notebooksReducer from "../features/notebooks/notebooksSlice";
import usersReducer from "../features/users/usersSlice";
import notesReducer from "../features/notes/notesSlice";
import flashcardsReducer from "../features/flashcards/flashcardsSlice";

export default combineReducers({
	// errors: errorsReducer,
	notes: notesReducer,
	notebooks: notebooksReducer,
	users: usersReducer,
	flashcards: flashcardsReducer,
});
