import React, { useState } from "react";
import NavBar from "./NavBar";

const Create = ({ onNotebookSubmit, notebooks }) => {
	const [subject, setSubject] = useState("");
	const [cover, setCover] = useState("");
	const [content, setContent] = useState("");
	const [tab, setTab] = useState("");
	const [errors, setErrors] = useState([]);

	const handleChange = (event) => {
		setSubject(event.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/notes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				tab,
				content,
				note_book_attributes: [subject, cover],
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((noteBook) => onNotebookSubmit(noteBook));
			} else {
				r.json().then((error) => console.log(error.errors));
			}
			setSubject("");
			setCover("");
		});
	}

	return (
		<>
			<NavBar />
			<h1>Create</h1>

			<form onSubmit={handleSubmit}>
				<label for="notebooks">Choose your notebook</label>
				<select name="notebooks" id="notebooks" onChange={handleChange}>
					<option value="">Select Notebook</option>
					{notebooks.map((notebook) => (
						<option value={notebook.subject}>{notebook.subject}</option>
					))}
				</select>

				<br></br>
				<h3>Or Add New Notebook</h3>
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
				/>
				<button type="submit" id="reviewBtn">
					Submit
				</button>
				{/* <ul>
					{errors.map((error) => (
						<li>{error}</li>
					))}
				</ul> */}
			</form>
		</>
	);
};

export default Create;
