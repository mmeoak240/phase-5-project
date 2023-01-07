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

function App() {
	const [user, setUser] = useState("");
	// const [notebooks, setNotebooks] = useState([]);
	const [notes, setNotes] = useState([]);

	const dispatch = useDispatch();
	const notebooks = useSelector((state) => state);
	console.log(notebooks);

	useEffect(() => {
		fetch("/me").then((r) => {
			if (r.ok) {
				r.json().then((client) => setUser(client));
			}
		});
	}, []);

	// useEffect(() => {
	// 	fetch("/note_books")
	// 		.then((r) => r.json())
	// 		.then((data) => setNotebooks(data));
	// 	console.log(notebooks);
	// }, []);

	useEffect(() => {
		dispatch(getNotebooks);
	}, []);

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

	const onLogin = (user) => {
		setUser(user);
	};
	return (
		<>
			<main>
				{user ? (
					<Routes>
						<Route
							exact
							path="/"
							element={<Home user={user} notes={notes} />}
						/>
						<Route
							path="/noteBooks"
							element={
								<NoteBooks notebooks={notebooks} onNoteSubmit={onNoteSubmit} />
							}
						/>
						<Route
							path="/addNoteBook"
							element={
								<Create
									onNotebookSubmit={onNotebookSubmit}
									notebooks={notebooks}
								/>
							}
						/>
						{/* <Route
							path="notes"
							element={<Notes notes={notes} onNoteSubmit={onNoteSubmit} />}
						/> */}
					</Routes>
				) : (
					<Routes>
						<Route
							exact
							path="/signup"
							element={<Signup onLogin={onLogin} />}
						></Route>
						<Route exact path="/" element={<Login onLogin={onLogin} />}></Route>
					</Routes>
				)}
			</main>
		</>
	);
}

export default App;
