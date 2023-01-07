import React, { useState } from "react";

const AddNote = ({ onNoteSubmit, notebook }) => {
	const [content, setContent] = useState("");
	const [tab, setTab] = useState("");
	const [errors, setErrors] = useState([]);

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/notes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				content,
				tab,
				user_id: 1,
				note_book_id: 1,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((note) => onNoteSubmit(note));
			} else {
				r.json().then((error) => setErrors(error.errors));
			}
			setContent("");
			setTab("");
		});
	}

	return (
		<>
			<h1>Tab</h1>
			<form onSubmit={handleSubmit}>
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
				<button type="submit">Submit</button>
				<ul>
					{errors.map((error) => (
						<li>{error}</li>
					))}
				</ul>
			</form>
		</>
	);
};

export default AddNote;
