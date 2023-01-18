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

function App() {
	// const [user, setUser] = useState("");
	const [notes, setNotes] = useState([]);

	const dispatch = useDispatch();
	const notebooks = useSelector((state) => state.notebooks.notebooks);
	const user = useSelector((state) => state.users.user);

	// useEffect(() => {
	// 	fetch("/me").then((r) => {
	// 		if (r.ok) {
	// 			r.json().then((user) => setUser(user));
	// 		}
	// 	});
	// }, []);

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
	}, [dispatch]);

	useEffect(() => {
		dispatch(getNotes());
	}, [dispatch]);

	useEffect(() => {
		fetch("/notes")
			.then((r) => r.json())
			.then((data) => setNotes(data));
	}, []);

	const onNotebookSubmit = (notebook) => {
		console.log("Hello");
		// setNotebooks([...notebooks, notebook]);
	};

	const onNoteSubmit = (note) => {
		console.log("World");
		// setNotebooks([...notes, note]);
	};

	// const onLogin = (user) => {
	// 	setUser(user);
	// };
	return (
		<>
			<main>
				{user ? (
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/noteBooks"
							element={<NoteBooks onNoteSubmit={onNoteSubmit} />}
						/>
						<Route
							path="/create"
							element={<Create onNotebookSubmit={onNotebookSubmit} />}
						/>
						<Route path="/notes/:notebook_id" element={<Notes />} />
						{/* <Route
							path="notes"
							element={<Notes notes={notes} onNoteSubmit={onNoteSubmit} />}
						/> */}
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
