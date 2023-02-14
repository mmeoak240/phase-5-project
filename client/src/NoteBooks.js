import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import NoteBookCard from "./NoteBookCard";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getNotebooks } from "./features/notebooks/notebooksSlice";
import { getFlashcards } from "./features/flashcards/flashcardsSlice";

const NoteBooks = () => {
	const dispatch = useDispatch();
	const notebooks = useSelector((state) => state.notebooks.notebooks);
	// const notes = useSelector((state) => state.notes.notes);

	// let testNotebooks = [...new Set(notes.map((note) => note.note_book))];
	// console.log(testNotebooks);

	useEffect(() => {
		dispatch(getNotebooks());
	}, []);

	return (
		<>
			<NavBar />

			<div>
				<h1>Note Books</h1>
				<div id="grid" class="centerBooks">
					{notebooks.map((notebook) => (
						<div>
							<NoteBookCard notebook={notebook} key={notebook.id} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default NoteBooks;
