import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	error: null,
	status: "idle",
};

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

export const signup = createAsyncThunk("users/signup", async (newUser) => {
	const res = await fetch("/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newUser),
	});
	const user = await res.json();
	return user;
});

export const updateUser = createAsyncThunk(
	"users/editUser",
	async (updatedUser) => {
		const res = await fetch(`/users/${updatedUser.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedUser),
		});
		const user = await res.json();
		debugger;
		return user;
	}
);

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		userAdded(state, action) {
			state.user = action.payload;
		},
		clearErrors(state) {
			state.error = null;
		},
	},
	extraReducers: {
		[login.pending](state) {
			state.status = "loading";
		},
		[login.fulfilled](state, action) {
			if (Object.keys(action.payload).includes("errors")) {
				state.error = action.payload;
			} else {
				state.user = action.payload;
				state.error = null;
			}
			state.status = "idle";
		},

		[logout.pending](state) {
			state.status = "loading";
		},
		[logout.fulfilled](state) {
			state.user = null;
			state.status = "idle";
		},

		[signup.pending](state) {
			state.status = "loading";
		},
		[signup.fulfilled](state, action) {
			if (Object.keys(action.payload).includes("errors")) {
				state.error = action.payload;
			} else {
				state.user = action.payload;
				state.status = "idle";
				state.error = null;
			}
		},
		[updateUser.pending](state) {
			state.status = "loading";
		},
		[updateUser.fulfilled](state, action) {
			if (Object.keys(action.payload).includes("errors")) {
				state.error = action.payload;
			} else {
				state.user = action.payload;
				state.error = null;
			}
			state.status = "idle";
		},
	},
});

export const { userAdded } = usersSlice.actions;
export const { clearErrors } = usersSlice.actions;

export default usersSlice.reducer;
