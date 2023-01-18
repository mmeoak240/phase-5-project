import { useState } from "react";
import Notes from "./Notes";
import { NavLink } from "react-router-dom";

const NoteBookCard = ({ notebook, showNotes }) => {
	return (
		<>
			<p class="noteBookTextCentered">{notebook.subject}</p>
			<NavLink to={`/notes/${notebook.id}`}>
				<img src={notebook.cover} alt="Notebook cover" class="noteBookSize" />
			</NavLink>
		</>
	);
};

export default NoteBookCard;

// get /note_books/:id
// use the selected notebook.notes to render notes and cover
// get "/note_books/{selectedNotebook.id}"
