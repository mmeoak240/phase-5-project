import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	notebooks: [],
	error: null,
	status: "idle",
};

// export const getNotebooks = createAsyncThunk(
// 	"notebooks/getnotebooks",
// 	(notebookForm) => {
// 		return fetch("/note_books", {
// 			method: "POST",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify(notebookForm),
// 		}).then((res) => res.json().then((notebookInfo) => notebookInfo));
// 	}
// );

export const getNotebooks = createAsyncThunk(
	"notebooks/getNotebooks",
	async () => {
		const r = await fetch("/note_books");
		const noteBooks = await r.json();
		return noteBooks;
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
	},
});

export default notebooksSlice.reducer;
