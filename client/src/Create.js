import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createNote } from "../src/features/notes/notesSlice";
import NavBar from "./NavBar";

const Create = () => {
	const [subject, setSubject] = useState("");
	const [cover, setCover] = useState("");
	const [content, setContent] = useState("");
	const [tab, setTab] = useState("");
	const [notebookId, setNotebookId] = useState(null);
	const [errors, setErrors] = useState([]);

	const dispatch = useDispatch();

	const notebooks = useSelector((store) => store.notebooks.notebooks);
	const user = useSelector((store) => store.users.user);

	const handleChange = (event) => {
		setNotebookId(event.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();
		const newNoteNotebook = {
			tab,
			content,
			user_id: user.id,
			note_book_id: notebookId,
			note_book_attributes: [subject, cover],
		};
		dispatch(createNote(newNoteNotebook));
		setSubject("");
		setCover("");
		setContent("");
		setTab("");
	}

	return (
		<>
			<>
				<input
					class="menu-icon"
					type="checkbox"
					id="menu-icon"
					name="menu-icon"
				/>
				<label for="menu-icon"></label>
				<nav class="nav">
					<ul class="pt-5">
						<li>
							<a>
								<NavLink to="/">Home</NavLink>
							</a>
						</li>
						<li>
							<a>
								<NavLink to="/noteBooks">Note Books</NavLink>
							</a>
						</li>
						<li>
							<a>
								<NavLink to="/create">Create</NavLink>
							</a>
						</li>
					</ul>
				</nav>
			</>
			<div>
				<h1>Create</h1>
				<form onSubmit={handleSubmit}>
					<select name="notebooks" id="notebooks" onChange={handleChange}>
						<option value="">Select Notebook</option>
						{notebooks.map((notebook) => (
							<option value={notebook.id}>{notebook.subject}</option>
						))}
					</select>
					<div></div>
					<h4>or create new notebook</h4>
					<label>Subject</label>
					<input
						type="text"
						id="subject"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					/>
					<label>Note Book Cover</label>
					<input
						type="text"
						id="cover"
						value={cover}
						onChange={(e) => setCover(e.target.value)}
					/>
					<br></br>
					<label>Tab</label>
					<input
						type="text"
						id="tab"
						value={tab}
						onChange={(e) => setTab(e.target.value)}
					/>
					<label>Note Page</label>
					<textarea
						type="text"
						id="content"
						value={content}
						onChange={(e) => setContent(e.target.value)}
						style={{ width: "2000px", height: "500px" }}
					/>
					<button
						type="submit"
						id="#formButton {
"
					>
						Submit
					</button>

					{/* <ul>
					{errors.map((error) => (
						<li>{error}</li>
					))}
				</ul> */}
				</form>
			</div>
		</>
	);
};

export default Create;
