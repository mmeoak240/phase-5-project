import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	notes: [],
};

export const createNote = createAsyncThunk(
	"assignments/addAssignment",
	async (newNote) => {
		const res = await fetch("/notes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newNote),
		});
		const note = await res.json();
		return note;
	}
);

const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {},
	extraReducers: {
		[createNote.fulfilled](state, action) {
			state.notes.push(action.payload);
		},
	},
});

export default notesSlice.reducer;
