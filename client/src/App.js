import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NoteBooks from "./NoteBooks";
import Create from "./Create";
import Login from "./Login";
import Signup from "./Signup";
import Notes from "./Notes";
import Flashcards from "./Flashcards";
import Account from "./Account";
import AddFlashcard from "./AddFlashcard";
import { getNotebooks } from "./features/notebooks/notebooksSlice";
import { getFlashcards } from "./features/flashcards/flashcardsSlice";

import { userAdded } from "./features/users/usersSlice";

function App() {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.users.user);

	useEffect(() => {
		fetch("/me").then((res) => {
			if (res.ok) {
				res.json().then((user) => {
					dispatch(userAdded(user));
				});
			}
		});
	}, []);

	// useEffect(() => {
	// 	dispatch(getFlashcards());
	// }, []);

	useEffect(() => {
		dispatch(getNotebooks());
	}, [dispatch]);

	// useEffect(() => {
	// 	dispatch(getNotes());
	// }, []);

	return (
		<>
			<main>
				{user ? (
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/notebooks" element={<NoteBooks />} />
						<Route path="/notes/new" element={<Create />} />
						{/* change */}
						<Route path="/notebooks/:notebook_id/notes" element={<Notes />} />
						<Route
							path="/notebooks/:notebook_id/flashcards"
							element={<Flashcards />}
						/>
						<Route path="/flashcards/new" element={<AddFlashcard />} />
						<Route path="/users/:user_id/edit" element={<Account />} />
					</Routes>
				) : (
					<Routes>
						<Route exact path="/signup" element={<Signup />}></Route>
						<Route exact path="/" element={<Login />}></Route>
					</Routes>
				)}
			</main>
		</>
	);
}

export default App;
