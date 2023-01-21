import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createNote } from "../src/features/notes/notesSlice";
// import "./Dropdown.css";
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
		console.log(event.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();
		const newNoteNotebook = {
			tab,
			content,
			user_id: user.id,
			note_book_id: notebookId,
			note_book_attributes: {
				subject: subject,
				cover: cover,
			},
		};
		dispatch(createNote(newNoteNotebook));
		console.log("In Create handleSubmit");
		console.log(newNoteNotebook);
		setSubject("");
		setCover("");
		setContent("");
		setTab("");
	}

	return (
		<>
			<>
				<NavBar />
			</>
			<div>
				<h1>Create</h1>
				<form onSubmit={handleSubmit}>
					{/* SELECTOR WITH ONCHANGE*/}
					<select name="notebooks" id="notebooks" onChange={handleChange}>
						<option value="">Select Notebook</option>
						{notebooks.map((notebook) => (
							<option value={notebook.id}>{notebook.subject}</option>
						))}
					</select>
					<br></br>
					<h4>or create new notebook</h4>
					{/* NEW NOTEBOOK INPUTS */}
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
					{/* NEW NOTE INPUTS */}
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
						style={{ width: "1300px", height: "800px", fontSize: 20 }}
					/>

					<button type="submit" id="#formButton">
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
