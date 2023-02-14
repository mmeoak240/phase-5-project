import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createNote } from "../src/features/notes/notesSlice";
import { getNotes } from "./features/notes/notesSlice";
import "./Dropdown.css";
import NavBar from "./NavBar";

const Create = () => {
	const [subject, setSubject] = useState("");
	const [cover, setCover] = useState("");
	const [content, setContent] = useState("");
	const [tab, setTab] = useState("");
	const [notebookId, setNotebookId] = useState(null);

	const dispatch = useDispatch();

	const notebooks = useSelector((store) => store.notebooks.notebooks);
	const user = useSelector((store) => store.users.user);
	const formErrors = useSelector((state) => state.notes.error);

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
		// dispatch(getNotes());
		setSubject("");
		setCover("");
		setContent("");
		setTab("");
	}

	return (
		<div>
			<>
				<NavBar />
			</>
			<div>
				<h1>Create</h1>
				<div className="form-box" style={{ paddingTop: "0px" }}>
					<form class="form" onSubmit={handleSubmit}>
						<select name="notebooks" id="notebooks" onChange={handleChange}>
							<option value="">Select Notebook</option>
							{notebooks.map((notebook) => (
								<option value={notebook.id}>{notebook.subject}</option>
							))}
						</select>

						<br></br>
						<h3>or create new notebook</h3>
						<br></br>

						<div>
							<hr />
						</div>
						<h2>New notebook</h2>
						<div className="feild1"></div>
						<input
							type="text"
							id="subject"
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
							placeholder="Subject"
						/>

						<input
							type="text"
							id="cover"
							value={cover}
							onChange={(e) => setCover(e.target.value)}
							placeholder="Notebook cover"
						/>
						<br></br>

						<div>
							<hr />
						</div>
						<input
							type="text"
							id="tab"
							value={tab}
							onChange={(e) => setTab(e.target.value)}
							placeholder="Tab"
						/>
						{/* <label>Note Page</label> */}

						<textarea
							maxlength="5000"
							type="text"
							id="content"
							value={content}
							onChange={(e) => setContent(e.target.value)}
							style={{ width: "1300px", height: "800px", fontSize: 20 }}
							placeholder="Notes"
						/>
						<br></br>
						<button type="submit" id="#formButton">
							Submit
						</button>
					</form>
				</div>
			</div>
			<ul>
				<p>
					{formErrors ? (
						formErrors.errors.map((error) => <h4>{error}</h4>)
					) : (
						<span></span>
					)}
				</p>
			</ul>
		</div>
	);
};

export default Create;
