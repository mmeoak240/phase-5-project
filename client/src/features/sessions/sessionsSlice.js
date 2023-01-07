import { createSlice } from "@reduxjs/toolkit";

// const sessionsSlice = createSlice({
// 	name: "sessions",
// 	initialState: {
// 		username,
// 		password,
// 		password_confirmation: passwordConfirmation,
// 		goals,
// 	},
// 	reducers: {
// 		login(state, action) {
// 			fetch("/signup", {
// 				method: "POST",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify(action.payload)
// 		},
// 		initialState = action.payload
// 		},
// 	}
// })

// export const signup = (details) => {
// No Fetch
// return {
// 	type: "SIGNUP",
// 	payload: details,
// };
// Fetch
// return async (dispatch) => {
// 	dispatch({ type: "REQUESTING" });

// 	const resp = await fetch("", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(),
// 	});
// 	const data = await resp.json();

// data.user??
// dispatch({ type: "LOGIN", payload: data });

// history.push("/")
// };

// export const logout = () => {
// 		type: "LOGOUT",
// 	};

// 	pass in history?
// 	export const login = (details) => {
// 		return async (dispatch) => {
// 			dispatch({ type: "REQUESTING" });
// 			const resp = await fetch("", {
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify(details),
// 			});
// 			const data = await resp.json();
// 			dispatch({ type: "LOGIN", payload: data });
// 			dispatch({ type: "DONE_REQUESTING" });
// 			// history.pushState('/')
// 		};
// 	};
// };
