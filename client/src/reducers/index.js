import { combineReducers } from "redux";
import sessionsReducer from "./sessionsReducer";
import errorsReducer from "./errorsReducer";
import notebooksReducer from "../features/notebooks/notebooksSlice";

export default combineReducers({
	errors: errorsReducer,
	sessions: sessionsReducer,
	notebooks: notebooksReducer,
});
