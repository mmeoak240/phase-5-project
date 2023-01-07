import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("users/login", async (userInfo) => {
	const res = await fetch("/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userInfo),
	});
	const user = await res.json();
	return user;
});

export const logout = createAsyncThunk("users/logout", () => {
	fetch("/logout", {
		method: "DELETE",
	});
});

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
	extraReducers: {
		[login.fulfilled](state, action) {
			state.user = action.payload;
		},
		[logout.fulfilled](state) {
			state.user = null;
		},
	},
});

export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;
