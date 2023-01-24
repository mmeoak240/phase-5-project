import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	notes: [],
	error: null,
};

export const getNotes = createAsyncThunk("notes/getNotes", async () => {
	const r = await fetch("/notes");
	const notes = await r.json();
	console.log(notes);
	return notes;
});

// NOTE POST IN REDUX LIBRARY
export const createNote = createAsyncThunk("notes/addNote", async (newNote) => {
	const res = await fetch("/notes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newNote),
	});
	const note = await res.json();
	console.log("in noteSlice POST");
	console.log(note);
	return note;
});

export const deleteNote = createAsyncThunk("notes/deletenote", async (id) => {
	const res = await fetch(`/notes/${id}`, {
		method: "DELETE",
	});
	const note_1 = await res.json();
	return note_1;
});

const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {},
	extraReducers: {
		[createNote.fulfilled](state, action) {
			state.notes.push(action.payload);
		},
		[getNotes.fulfilled](state, action) {
			state.notes = action.payload;
		},
		[deleteNote.fulfilled](state, action) {
			state.notes = state.notes.filter((note) => note.id !== action.payload);
		},
	},
});

export default notesSlice.reducer;
