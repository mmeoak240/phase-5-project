import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	notebooks: [],
	notes: [],
	error: null,
	status: "idle",
};

export const getNotebooks = createAsyncThunk(
	"notebooks/getNotebooks",
	async () => {
		const r = await fetch("/note_books");
		const noteBooks = await r.json();

		return noteBooks;
	}
);

export const createNotebook = createAsyncThunk(
	"notebooks/addNotebook",
	async (newNotebook) => {
		const res = await fetch("/note_books", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newNotebook),
		});
		const notebook = await res.json();

		return notebook;
	}
);

export const getNotebook = createAsyncThunk(
	"notebooks/getNotebook",
	async () => {
		const r = await fetch("/note_books/:id");
		const noteBook = await r.json();
		console.log(noteBook);

		return noteBook;
	}
);

export const deleteNotebook = createAsyncThunk(
	"notebooks/deletenotebook",
	async (id) => {
		const res = await fetch(`/note_books/${id}`, {
			method: "DELETE",
		});
		const notebook_1 = await res.json();
		return notebook_1;
	}
);

// ------------NOTES-----------------
export const getNotes = createAsyncThunk("notes/getNotes", async () => {
	const r = await fetch("/notes");
	const notes = await r.json();
	return notes;
});

export const createNote = createAsyncThunk("notes/addNote", async (newNote) => {
	const res = await fetch("/notes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newNote),
	});
	const note = await res.json();

	return note;
});

export const updateNote = createAsyncThunk(
	"notes/editNote",
	async (updatedNote) => {
		const res = await fetch(`/notes/${updatedNote.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedNote),
		});
		const note = await res.json();
		return note;
	}
);

export const deleteNote = createAsyncThunk("notes/deletenote", async (id) => {
	const res = await fetch(`/notes/${id}`, {
		method: "DELETE",
	});
	const note_1 = await res.json();
	return note_1;
});

const notebooksSlice = createSlice({
	name: "notebooks",
	initialState,
	reducers: {},
	extraReducers: {
		[getNotebooks.pending](state) {
			state.status = "loading";
		},
		[getNotebooks.fulfilled](state, action) {
			state.notebooks = action.payload;

			state.status = "idle";
		},
		[createNotebook.pending](state) {
			state.status = "loading";
		},
		[createNotebook.fulfilled](state, action) {
			if (Object.keys(action.payload).includes("errors")) {
				state.error = action.payload;
			} else {
				state.notebooks.push(action.payload);
			}
			state.status = "idle";
		},
		[deleteNotebook.pending](state) {
			state.status = "loading";
		},
		[deleteNotebook.fulfilled](state, action) {
			if (Object.keys(action.payload).includes("errors")) {
				state.error = action.payload;
			} else {
				state.notebooks = state.notebooks.filter(
					(notebook) => notebook.id !== action.payload
				);
			}
			state.status = "idle";
		},
		// -----------------NOTES---------------------------
		[createNote.pending](state) {
			state.status = "loading";
		},
		[createNote.fulfilled](state, action) {
			const titles = state.notebooks.map((book) => book.subject);

			if (Object.keys(action.payload).includes("errors")) {
				state.error = action.payload;
			} else if (titles.includes(action.payload.note_book.subject)) {
				state.notes.push(action.payload);
			} else {
				state.notes.push(action.payload);
				state.notebooks.push(action.payload.note_book);
			}

			// if (Object.keys(action.payload).includes("errors")) {
			// 	state.error = action.payload;
			// } else {
			// 	state.notes.push(action.payload);
			// 	state.notebooks.push(action.payload.note_book);
			// }
			state.status = "idle";
		},
		[getNotes.pending](state) {
			state.status = "loading";
		},
		[getNotes.fulfilled](state, action) {
			state.notes = action.payload;
			state.status = "idle";
		},
		[updateNote.pending](state) {
			state.status = "loading";
		},
		[updateNote.fulfilled](state, action) {
			if (Object.keys(action.payload).includes("errors")) {
				state.error = action.payload;
			} else {
				state.notes = state.notes.filter(
					(note) => note.id !== action.payload.id
				);
				state.notes.push(action.payload);
			}
			state.status = "idle";
		},
		[deleteNote.pending](state) {
			state.status = "loading";
		},
		[deleteNote.fulfilled](state, action) {
			if (Object.keys(action.payload).includes("errors")) {
				state.error = action.payload;
			} else {
				state.notes = state.notes.filter((note) => note.id !== action.payload);
			}
			state.status = "idle";
		},
	},
});

export default notebooksSlice.reducer;
