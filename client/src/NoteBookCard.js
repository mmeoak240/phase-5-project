import { useState } from "react";
import Notes from "./Notes";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteNotebook } from "./features/notebooks/notebooksSlice";
import { getNotebooks } from "./features/notebooks/notebooksSlice";

const NoteBookCard = ({ notebook }) => {
	const dispatch = useDispatch();

	function handleDeleteNotebook(id) {
		dispatch(deleteNotebook(id));
		dispatch(getNotebooks());
	}
	return (
		<>
			<p class="noteBookTextCentered">{notebook.subject}</p>
			<NavLink to={`/notebooks/${notebook.id}/notes`}>
				<img src={notebook.cover} alt="Notebook cover" class="noteBookSize" />
			</NavLink>
			<br></br>
			<button
				class="notebook-dlt-btn"
				onClick={function () {
					handleDeleteNotebook(notebook.id);
				}}
			>
				DELETE
			</button>
		</>
	);
};

export default NoteBookCard;

// get /note_books/:id
// use the selected notebook.notes to render notes and cover
// get "/note_books/{selectedNotebook.id}"
