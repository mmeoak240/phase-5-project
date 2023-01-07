import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	notebooks: [],
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
		console.log(noteBooks);
		return noteBooks;
	}
);

const notebooksSlice = createSlice({
	name: "notebooks",
	initialState,
	reducers: {},
	extraReducers: {
		[getNotebooks.fulfilled](state, action) {
			state.notebooks = action.payload;
		},
	},
});

export default notebooksSlice.reducer;
