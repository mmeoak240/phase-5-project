import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	flashcards: [],
	error: null,
	status: "idle",
};

// export const getFlashcards = createAsyncThunk(
// 	"flashcards/getFlashcards",
// 	async () => {
// 		const r = await fetch("/flashcards");
// 		const flashcards = await r.json();
// 		return flashcards;
// 	}
// );

export const getFlashcards = createAsyncThunk(
	"flashcards/getFlashcards",
	async () => {
		const r = await fetch("/flashcards");
		const flashcards = await r.json();
		return flashcards;
	}
);

export const createFlashcard = createAsyncThunk(
	"flashcards/addFlashcard",
	async (newFlashcard) => {
		const res = await fetch("/flashcards", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newFlashcard),
		});
		const flashcard = await res.json();
		return flashcard;
	}
);

export const deleteFlashcard = createAsyncThunk(
	"flashcards/deleteflashcard",
	async (id) => {
		const res = await fetch(`/flashcards/${id}`, {
			method: "DELETE",
		});
		const flashcard_1 = await res.json();
		return flashcard_1;
	}
);

const flashcardsSlice = createSlice({
	name: "flashcards",
	initialState,
	reducers: {},
	extraReducers: {
		[createFlashcard.pending](state) {
			state.status = "loading";
		},
		[createFlashcard.fulfilled](state, action) {
			state.flashcards.push(action.payload);
			state.status = "idle";
		},
		[getFlashcards.pending](state) {
			state.status = "loading";
		},
		[getFlashcards.fulfilled](state, action) {
			state.flashcards = action.payload;
			state.status = "idle";
		},
		[deleteFlashcard.pending](state) {
			state.status = "loading";
		},
		[deleteFlashcard.fulfilled](state, action) {
			state.flashcards = state.flashcards.filter(
				(flashcard) => flashcard.id !== action.payload
			);
			state.status = "idle";
		},
	},
});

export default flashcardsSlice.reducer;
