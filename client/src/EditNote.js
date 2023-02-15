import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateNote } from "./features/notebooks/notebooksSlice";
import NavBar from "./NavBar";

const EditNote = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const noteId = params.note_id;
	const user = useSelector((state) => state.users.user);
	const note = user.notes.find((note) => note.id == noteId);
	const [tab, setTab] = useState(`${note.tab}`);
	const [content, setContent] = useState(`${note.content}`);

	function handleSubmit(e) {
		e.preventDefault();
		const updatedNote = {
			id: note.id,
			tab,
			content,
		};
		dispatch(updateNote(updatedNote));
		setContent("");
		setTab("");
	}

	return (
		<>
			<NavBar />
			<div>
				<h1>Edit Note</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						id="tab"
						value={tab}
						onChange={(e) => setTab(e.target.value)}
						placeholder="Tab"
					/>

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
		</>
	);
};

export default EditNote;
