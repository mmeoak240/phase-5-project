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
import { getNotebooks } from "./features/notebooks/notebooksSlice";
import { getNotes } from "./features/notes/notesSlice";
import { userAdded } from "./features/users/usersSlice";
import { createNote } from "../src/features/notes/notesSlice";

function App() {
	// const [notes, setNotes] = useState([]);

	const dispatch = useDispatch();
	const notebooks = useSelector((state) => state.notebooks.notebooks);
	const user = useSelector((state) => state.users.user);
	const notes = useSelector((state) => state.notes.notes);

	useEffect(() => {
		fetch("/me").then((res) => {
			if (res.ok) {
				res.json().then((user) => {
					dispatch(userAdded(user));
				});
			}
		});
	}, []);

	useEffect(() => {
		dispatch(getNotebooks());
	}, []);

	useEffect(() => {
		dispatch(getNotes());
	}, []);

	// useEffect(() => {
	// 	fetch("/notes")
	// 		.then((r) => r.json())
	// 		.then((data) => setNotes(data));
	// }, []);

	return (
		<>
			<main>
				{user ? (
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/noteBooks" element={<NoteBooks />} />
						<Route path="/create" element={<Create />} />
						<Route path="/notes/:notebook_id" element={<Notes />} />
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
