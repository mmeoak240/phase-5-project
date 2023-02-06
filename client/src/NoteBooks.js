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

	// useEffect(() => {
	// 	dispatch(getNotebooks());
	// }, [dispatch]);

	// useEffect(() => {
	// 	dispatch(getFlashcards());
	// }, [dispatch]);

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
