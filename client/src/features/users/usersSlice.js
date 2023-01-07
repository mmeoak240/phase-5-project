import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	user: null,
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		userAdded(state, action) {
			state.user = action.payload;
		},
	},
	extraReducers: {},
});

export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;
